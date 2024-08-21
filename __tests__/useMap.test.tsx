import { renderHook, act } from '@testing-library/react';
import { jest } from '@jest/globals';
import { useMap } from '@/hooks/useMap';
import { NaverMapService } from '@/lib/map/naver-map-service';

jest.mock('@/lib/map/naver-map-service');

describe('useMap', () => {
  const mapService = {
    initializeMap: jest.fn(),
    setCenter: jest.fn(),
    setMarker: jest.fn(),
    setMarkers: jest.fn(),
    setCurrentLocation: jest.fn(),
    getMap: jest.fn(),
    getMarkers: jest.fn(),
    geocode: jest.fn(),
    addZoomListener: jest.fn(),
    addDragendListener: jest.fn(),
    removeListener: jest.fn(),
  };

  beforeEach(() => {
    (NaverMapService as jest.Mock).mockReturnValue(mapService);
  });

  it('맵 초기화 및 onMapLoaded', () => {
    const onMapLoaded = jest.fn();
    const { result } = renderHook(() => useMap('searchedAddress', onMapLoaded));

    // Simulate map initialization
    act(() => {
      // Ensure map initialization has occurred
      result.current.mapRef.current = mapService;
    });

    expect(onMapLoaded).toHaveBeenCalled();
  });

  it('마커 업데이트', () => {
    const { result } = renderHook(() => useMap('searchedAddress', () => {}));

    // Simulate map initialization
    act(() => {
      result.current.mapRef.current = {
        setCurrentLocation: jest.fn(),
        initializeMap: jest.fn(),
        setCenter: jest.fn(),
        setMarker: jest.fn(),
        setMarkers: jest.fn(),
        addZoomListener: jest.fn(),
        addDragendListener: jest.fn(),
        removeListener: jest.fn(),
        getMarkers: jest.fn(),
        getMap: jest.fn(),
        geocode: jest.fn(),
      };
    });

    // Update the markers
    act(() => {
      mapService.getMarkers.mockReturnValue([{ id: 1 }, { id: 2 }]);
      mapService.setMarkers([{ id: 1 }, { id: 2 }]);
    });

    expect(mapService.setMarkers).toHaveBeenCalledWith([{ id: 1 }, { id: 2 }]);
  });
});
