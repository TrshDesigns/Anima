function optimalPath(directions) {
  const registry = [];

  for (let dir of directions) {
    const last = registry[registry.length - 1];
    if (
      (last === "NORTH" && dir === "SOUTH") ||
      (last === "SOUTH" && dir === "NORTH") ||
      (last === "EAST" && dir === "WEST") ||
      (last === "WEST" && dir === "EAST")
    ) {
      registry.pop();
    } else {
      registry.push(dir);
    }
    console.log(registry);
  }

  return registry;
}
