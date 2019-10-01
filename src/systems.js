const MoveFinger = (entities, { touches }) => {
	touches.filter(t => t.type === "move").forEach(t => {
		let finger = entities[t.id];
		if (finger && finger.position) {
			finger.position = [
				finger.position[0] + t.delta.pageX,
				finger.position[1] + t.delta.pageY
			];
		}
	});

	return entities;
};

const PressFinger = (entities, { touches }) => {
	touches.filter(t => t.type === "press").forEach(t => {
		console.log("test")
		let finger = entities[t.id];
		if (finger && finger.position) {
			finger.position = [t.event.pageX, t.event.pageY];
		}
	});

	return entities;
};

export { MoveFinger, PressFinger };
