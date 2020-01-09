import TiMap from 'ti.map';

const mapview = TiMap.createView({
	region: { latitude: 37.359996, longitude: -121.950208, latitudeDelta: 0.6, longitudeDelta: 0.6 },
	annotations: [
		TiMap.createAnnotation({
			latitude: 52.39,
			longitude: 4.89,
			title: 'Amsterdam',
			subtitle: 'You found me :)',
			pincolor: TiMap.ANNOTATION_RED,
			id: 'amsterdam',
		}),
	],
	id: 'mapview',
});

mapview.addEventListener('click', (e: TiMap.View_click_Event) => {
	if (e.annotation) {
		console.log('annotation deselected', e.annotation.id);
	}
});

const circle = TiMap.createCircle({
	center: { latitude: 37.368122, longitude: -122.213653 },
	radius: 5000,
	fillColor: '#ff0000',
	strokeColor: '#000000',
	strokeWidth: 2,
	opacity: 0.5,
	id: 'mapCircle',
});

const line1 = TiMap.createPolyline({
	points: [
		{ latitude: 37.368122, longitude: -121.913653 },
		{ latitude: 37.268122, longitude: -121.913653 },
		{ latitude: 37.268122, longitude: -121.713653 },
	],
	strokeColor: 'red',
	strokeWidth: 3,
	id: 'mapLineOne',
});

const line2 = TiMap.createPolyline({
	points: [
		{ latitude: 37.368122, longitude: -121.913653 },
		{ latitude: 37.368122, longitude: -121.713653 },
		{ latitude: 37.268122, longitude: -121.713653 },
	],
	strokeColor: 'red',
	strokeWidth: 3,
	pattern: { type: TiMap.POLYLINE_PATTERN_DASHED, gapLength: 15, dashLength: 3 },
	id: 'mapLineTwo',
});

const line3 = TiMap.createPolyline({
	points: [
		{ latitude: 37.368122, longitude: -121.913653 },
		{ latitude: 37.568122, longitude: -121.913653 },
		{ latitude: 37.568122, longitude: -122.113653 },
	],
	strokeColor: 'red',
	strokeWidth: 3,
	pattern: { type: TiMap.POLYLINE_PATTERN_DASHED, gapLength: 15, dashLength: 15 },
	id: 'mapLineThree',
});

const polygon = TiMap.createPolygon({
	fillColor: 'red',
	points: [
		{ latitude: 37.368122, longitude: -121.913653 },
		{ latitude: 37.268122, longitude: -121.963653 },
		{ latitude: 37.298122, longitude: -121.993653 },
		{ latitude: 37.348122, longitude: -122.113653 },
		{ latitude: 37.458122, longitude: -121.993653 },
	],
	holes: [
		[
			{ latitude: 37.328122, longitude: -121.943653 },
			{ latitude: 37.328122, longitude: -121.963653 },
			{ latitude: 37.318122, longitude: -121.963653 },
			{ latitude: 37.318122, longitude: -121.943653 },
		],
	],
	id: 'mapPolygon',
});

mapview.addCircle(circle);
mapview.addPolylines([line1, line2, line3]);
mapview.addPolygon(polygon);
