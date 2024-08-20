import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { jest } from '@jest/globals';
import MapAndMarkers from '@/components/map-and-markers';
import { useGeolocation } from '@/hooks/useGeolocation';
import { useMap } from '@/hooks/useMap';

// Mock hooks
jest.mock('@/hooks/useGeolocation', () => ({
  useGeolocation: jest.fn(),
}));

jest.mock('@/hooks/useMap', () => ({
  useMap: jest.fn(),
}));

describe('MapAndMarkers', () => {
  const searchedAddress = '서울특별시 서초구 서초대로';
  const setSearchedAddress = jest.fn();

  beforeEach(() => {
    (useGeolocation as jest.Mock).mockReturnValue({
      location: { lat: 37.5665, lng: 126.978 },
      address: searchedAddress,
    });
    (useMap as jest.Mock).mockReturnValue({
      mapRef: { current: { setCurrentLocation: jest.fn() } },
    });
  });

  it('Loader 컴포넌트가 맵이 로드되기 전까지 렌더링되는지 확인', () => {
    render(<MapAndMarkers searchedAddress={searchedAddress} setSearchedAddress={setSearchedAddress} />);
    expect(screen.getByText('현재 위치 검색')).toBeInTheDocument();
  });

  it('현재 위치 버튼이 올바르게 렌더링되는지 확인', async () => {
    render(<MapAndMarkers searchedAddress="서초대로 14길" setSearchedAddress={setSearchedAddress} />);
    const button = screen.getByText('현재 위치 검색');
    fireEvent.click(button);
    await waitFor(() => {
      const mapRef = useMap(searchedAddress, () => {}).mapRef;
      if (mapRef.current) {
        expect(mapRef.current.setCurrentLocation).toHaveBeenCalledWith(37.5665, 126.978);
      } else {
        throw new Error('mapRef.current is null');
      }
      expect(setSearchedAddress).toHaveBeenCalledWith('서울특별시 서초구');
    });
  });
});
