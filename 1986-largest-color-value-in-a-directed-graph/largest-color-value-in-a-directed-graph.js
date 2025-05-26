var largestPathValue = function(colors, edges) {
    const n = colors.length;
    const graph = Array.from({ length: n }, () => []);
    const indegree = new Array(n).fill(0);

    // Build the graph
    for (let [u, v] of edges) {
        graph[u].push(v);
        indegree[v]++;
    }

    // DP table: dp[i][c] = max times color c appears in a path ending at node i
    const dp = Array.from({ length: n }, () => new Array(26).fill(0));
    
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) queue.push(i);
        dp[i][colors.charCodeAt(i) - 97] = 1;  // Initialize node with its own color
    }

    let visited = 0;
    let maxColorValue = 0;

    while (queue.length > 0) {
        const node = queue.shift();
        visited++;
        const colorIdx = colors.charCodeAt(node) - 97;

        for (let neighbor of graph[node]) {
            for (let c = 0; c < 26; c++) {
                let extra = (colors.charCodeAt(neighbor) - 97 === c) ? 1 : 0;
                dp[neighbor][c] = Math.max(dp[neighbor][c], dp[node][c] + extra);
            }
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) queue.push(neighbor);
        }

        maxColorValue = Math.max(maxColorValue, ...dp[node]);
    }

    return visited === n ? maxColorValue : -1; // if all nodes were visited, no cycle
};
