// dfs.js

/**
 * Depth-First Search (DFS) algorithm
 * @param {Object} graph - The graph represented as an adjacency list
 * @param {string} startNode - The starting node for DFS
 * @returns {Array<string>} - The nodes visited in DFS order
 */
function dfs(graph, startNode) {
    let visited = new Set();
    let result = [];

    function dfsHelper(node) {
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);

            for (let neighbor of graph[node]) {
                dfsHelper(neighbor);
            }
        }
    }

    dfsHelper(startNode);
    return result;
}

// Example usage
const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F', 'G'],
    D: [],
    E: ['H'],
    F: [],
    G: [],
    H: []
};

const startNode = 'A';
const dfsResult = dfs(graph, startNode);

console.log('DFS Order:', dfsResult);

module.exports = dfs;
