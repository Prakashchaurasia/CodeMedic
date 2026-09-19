import { createProblem } from "../problem_blueprints.mjs";

export function getGraphProblems() {
    return [
        // 1. Number of Islands
        createProblem({
            title: "Number of Islands",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["BFS", "DFS"],
            dataStructures: ["Matrix", "Queue"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(m * n)",
            description: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
            constraints: "m == grid.length\nn == grid[i].length\n1 <= m, n <= 300\ngrid[i][j] is '0' or '1'.",
            fnName: "numIslands",
            returnType: "int",
            params: [{ name: "grid", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[1, 1, 1, 1, 0], [1, 1, 0, 1, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0]]],
                [[[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 1]]]
            ],
            solver: (grid) => {
                const g = grid.map(r => [...r]);
                const m = g.length, n = g[0].length;
                let islands = 0;
                const dfs = (r, c) => {
                    if (r < 0 || r >= m || c < 0 || c >= n || g[r][c] !== 1) return;
                    g[r][c] = 0;
                    dfs(r + 1, c);
                    dfs(r - 1, c);
                    dfs(r, c + 1);
                    dfs(r, c - 1);
                };
                for (let r = 0; r < m; r++) {
                    for (let c = 0; c < n; c++) {
                        if (g[r][c] === 1) {
                            islands++;
                            dfs(r, c);
                        }
                    }
                }
                return islands;
            }
        }),

        // 2. Max Area of Island
        createProblem({
            title: "Max Area of Island",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["DFS", "BFS"],
            dataStructures: ["Matrix"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(m * n)",
            description: "You are given an m x n binary matrix grid. An island is a group of 1's connected 4-directionally. The area of an island is the number of cells with a value 1 in the island. Return the maximum area of an island in grid. If there is no island, return 0.",
            constraints: "m == grid.length\nn == grid[i].length\n1 <= m, n <= 50\ngrid[i][j] is either 0 or 1.",
            fnName: "maxAreaOfIsland",
            returnType: "int",
            params: [{ name: "grid", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[0, 0, 1, 0, 0], [1, 1, 1, 0, 0], [0, 1, 0, 0, 1]]],
                [[[0, 0, 0, 0, 0]]]
            ],
            solver: (grid) => {
                const g = grid.map(r => [...r]);
                const m = g.length, n = g[0].length;
                let maxArea = 0;
                const dfs = (r, c) => {
                    if (r < 0 || r >= m || c < 0 || c >= n || g[r][c] !== 1) return 0;
                    g[r][c] = 0;
                    return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);
                };
                for (let r = 0; r < m; r++) {
                    for (let c = 0; c < n; c++) {
                        if (g[r][c] === 1) {
                            maxArea = Math.max(maxArea, dfs(r, c));
                        }
                    }
                }
                return maxArea;
            }
        }),

        // 3. Flood Fill
        createProblem({
            title: "Flood Fill",
            topic: "Graphs",
            difficulty: "Easy",
            patterns: ["DFS", "BFS"],
            dataStructures: ["Matrix"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(m * n)",
            description: "An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image. Perform a flood fill on the image starting from the pixel image[sr][sc] with color color. Return the modified image.",
            constraints: "m == image.length\nn == image[i].length\n1 <= m, n <= 50\n0 <= image[i][j], color < 65536\n0 <= sr < m\n0 <= sc < n",
            fnName: "floodFill",
            returnType: "vector<vector<int>>",
            params: [
                { name: "image", type: "vector<vector<int>>&" },
                { name: "sr", type: "int" },
                { name: "sc", type: "int" },
                { name: "color", type: "int" }
            ],
            rawExamples: [
                [[[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2],
                [[[0, 0, 0], [0, 0, 0]], 0, 0, 0]
            ],
            solver: (image, sr, sc, color) => {
                const g = image.map(r => [...r]);
                const original = g[sr][sc];
                if (original === color) return g;
                const m = g.length, n = g[0].length;
                const dfs = (r, c) => {
                    if (r < 0 || r >= m || c < 0 || c >= n || g[r][c] !== original) return;
                    g[r][c] = color;
                    dfs(r + 1, c);
                    dfs(r - 1, c);
                    dfs(r, c + 1);
                    dfs(r, c - 1);
                };
                dfs(sr, sc);
                return g;
            }
        }),

        // 4. Rotting Oranges
        createProblem({
            title: "Rotting Oranges Minimum Minutes",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["BFS"],
            dataStructures: ["Queue", "Matrix"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(m * n)",
            description: "You are given an m x n grid where 0 is empty, 1 is fresh orange, and 2 is rotten orange. Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no cell has a fresh orange. If impossible, return -1.",
            constraints: "m == grid.length\nn == grid[i].length\n1 <= m, n <= 10\ngrid[i][j] is 0, 1, or 2.",
            fnName: "orangesRotting",
            returnType: "int",
            params: [{ name: "grid", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[2, 1, 1], [1, 1, 0], [0, 1, 1]]],
                [[[2, 1, 1], [0, 1, 1], [1, 0, 1]]],
                [[[0, 2]]]
            ],
            solver: (grid) => {
                const g = grid.map(r => [...r]);
                const m = g.length, n = g[0].length;
                const q = [];
                let fresh = 0;
                for (let r = 0; r < m; r++) {
                    for (let c = 0; c < n; c++) {
                        if (g[r][c] === 2) q.push([r, c, 0]);
                        if (g[r][c] === 1) fresh++;
                    }
                }
                let minutes = 0;
                const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
                while (q.length > 0) {
                    const [r, c, t] = q.shift();
                    minutes = Math.max(minutes, t);
                    for (const [dr, dc] of dirs) {
                        const nr = r + dr, nc = c + dc;
                        if (nr >= 0 && nr < m && nc >= 0 && nc < n && g[nr][nc] === 1) {
                            g[nr][nc] = 2;
                            fresh--;
                            q.push([nr, nc, t + 1]);
                        }
                    }
                }
                return fresh === 0 ? minutes : -1;
            }
        }),

        // 5. Course Schedule
        createProblem({
            title: "Course Schedule Cycle Detection",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["Topological Sort", "DFS"],
            dataStructures: ["Graph", "Array"],
            expectedTime: "O(v + e)",
            expectedSpace: "O(v + e)",
            description: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [a_i, b_i] indicates that you must take course b_i first if you want to take course a_i. Return true if you can finish all courses.",
            constraints: "1 <= numCourses <= 2000\n0 <= prerequisites.length <= 5000\nprerequisites[i].length == 2\n0 <= a_i, b_i < numCourses\nAll pairs [a_i, b_i] are distinct.",
            fnName: "canFinish",
            returnType: "bool",
            params: [
                { name: "numCourses", type: "int" },
                { name: "prerequisites", type: "vector<vector<int>>&" }
            ],
            rawExamples: [
                [2, [[1, 0]]],
                [2, [[1, 0], [0, 1]]]
            ],
            solver: (numCourses, prerequisites) => {
                const adj = Array.from({ length: numCourses }, () => []);
                const inDegree = new Array(numCourses).fill(0);
                for (const [a, b] of prerequisites) {
                    adj[b].push(a);
                    inDegree[a]++;
                }
                const q = [];
                for (let i = 0; i < numCourses; i++) {
                    if (inDegree[i] === 0) q.push(i);
                }
                let taken = 0;
                while (q.length > 0) {
                    const u = q.shift();
                    taken++;
                    for (const v of adj[u]) {
                        if (--inDegree[v] === 0) q.push(v);
                    }
                }
                return taken === numCourses;
            }
        }),

        // 6. Number of Provinces
        createProblem({
            title: "Number of Provinces Connected Components",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["DFS", "Union-Find"],
            dataStructures: ["Graph", "Matrix"],
            expectedTime: "O(n^2)",
            expectedSpace: "O(n)",
            description: "There are n cities. An n x n matrix isConnected gives connection between cities: isConnected[i][j] = 1 if city i and city j are directly connected. Return the total number of provinces (connected components).",
            constraints: "1 <= n <= 200\nn == isConnected.length == isConnected[i].length\nisConnected[i][j] is 1 or 0.\nisConnected[i][i] == 1\nisConnected[i][j] == isConnected[j][i]",
            fnName: "findCircleNum",
            returnType: "int",
            params: [{ name: "isConnected", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[1, 1, 0], [1, 1, 0], [0, 0, 1]]],
                [[[1, 0, 0], [0, 1, 0], [0, 0, 1]]]
            ],
            solver: (isConnected) => {
                const n = isConnected.length;
                const visited = new Array(n).fill(false);
                let provinces = 0;
                const dfs = (i) => {
                    visited[i] = true;
                    for (let j = 0; j < n; j++) {
                        if (isConnected[i][j] === 1 && !visited[j]) {
                            dfs(j);
                        }
                    }
                };
                for (let i = 0; i < n; i++) {
                    if (!visited[i]) {
                        provinces++;
                        dfs(i);
                    }
                }
                return provinces;
            }
        }),

        // 7. Is Graph Bipartite?
        createProblem({
            title: "Is Graph Bipartite?",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["BFS", "DFS"],
            dataStructures: ["Graph", "Array"],
            expectedTime: "O(v + e)",
            expectedSpace: "O(v)",
            description: "There is an undirected graph with n nodes. Given an adjacency list graph where graph[u] is an array of nodes adjacent to u, return true if and only if it is bipartite.",
            constraints: "graph.length == n\n1 <= n <= 100\n0 <= graph[u].length < n\n0 <= graph[u][i] <= n - 1\ngraph[u] does not contain u.\nAll values of graph[u] are unique.",
            fnName: "isBipartite",
            returnType: "bool",
            params: [{ name: "graph", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]],
                [[[1, 3], [0, 2], [1, 3], [0, 2]]]
            ],
            solver: (graph) => {
                const n = graph.length;
                const color = new Array(n).fill(0);
                for (let i = 0; i < n; i++) {
                    if (color[i] !== 0) continue;
                    const q = [i];
                    color[i] = 1;
                    while (q.length > 0) {
                        const u = q.shift();
                        for (const v of graph[u]) {
                            if (color[v] === 0) {
                                color[v] = -color[u];
                                q.push(v);
                            } else if (color[v] === color[u]) {
                                return false;
                            }
                        }
                    }
                }
                return true;
            }
        }),

        // 8. Find Center of Star Graph
        createProblem({
            title: "Find Center of Star Graph",
            topic: "Graphs",
            difficulty: "Easy",
            patterns: ["Graph"],
            dataStructures: ["Graph", "Array"],
            expectedTime: "O(1)",
            expectedSpace: "O(1)",
            description: "There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node connected to every other node. Given the 2D integer array edges, return the center of the given star graph.",
            constraints: "3 <= n <= 10^5\nedges.length == n - 1\nedges[i].length == 2\n1 <= u_i, v_i <= n",
            fnName: "findCenter",
            returnType: "int",
            params: [{ name: "edges", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[1, 2], [2, 3], [4, 2]]],
                [[[1, 2], [5, 1], [1, 3], [1, 4]]]
            ],
            solver: (edges) => {
                const [u1, v1] = edges[0];
                const [u2, v2] = edges[1];
                return (u1 === u2 || u1 === v2) ? u1 : v1;
            }
        }),

        // 9. Find if Path Exists in Graph
        createProblem({
            title: "Find if Path Exists in Graph",
            topic: "Graphs",
            difficulty: "Easy",
            patterns: ["DFS", "BFS", "Union-Find"],
            dataStructures: ["Graph", "Array"],
            expectedTime: "O(v + e)",
            expectedSpace: "O(v + e)",
            description: "There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1. Given 2D integer array edges and integers source and destination, return true if there is a valid path from source to destination.",
            constraints: "1 <= n <= 2 * 10^5\n0 <= edges.length <= 2 * 10^5\nedges[i].length == 2\n0 <= u_i, v_i <= n - 1\n0 <= source, destination <= n - 1",
            fnName: "validPath",
            returnType: "bool",
            params: [
                { name: "n", type: "int" },
                { name: "edges", type: "vector<vector<int>>&" },
                { name: "source", type: "int" },
                { name: "destination", type: "int" }
            ],
            rawExamples: [
                [3, [[0, 1], [1, 2], [2, 0]], 0, 2],
                [6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5]
            ],
            solver: (n, edges, source, destination) => {
                if (source === destination) return true;
                const adj = Array.from({ length: n }, () => []);
                for (const [u, v] of edges) {
                    adj[u].push(v);
                    adj[v].push(u);
                }
                const visited = new Array(n).fill(false);
                visited[source] = true;
                const q = [source];
                while (q.length > 0) {
                    const u = q.shift();
                    if (u === destination) return true;
                    for (const v of adj[u]) {
                        if (!visited[v]) {
                            visited[v] = true;
                            q.push(v);
                        }
                    }
                }
                return false;
            }
        }),

        // 10. Keys and Rooms
        createProblem({
            title: "Keys and Rooms Can Visit All",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["BFS", "DFS"],
            dataStructures: ["Graph", "Array"],
            expectedTime: "O(n + e)",
            expectedSpace: "O(n)",
            description: "There are n rooms labeled from 0 to n - 1 and all the rooms are locked, except for room 0. Each room has a list of keys to other rooms. Return true if you can visit all the rooms, or false otherwise.",
            constraints: "n == rooms.length\n2 <= n <= 1000\n0 <= rooms[i].length <= 1000\n1 <= sum(rooms[i].length) <= 3000\n0 <= rooms[i][j] < n",
            fnName: "canVisitAllRooms",
            returnType: "bool",
            params: [{ name: "rooms", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[1], [2], [3], []]],
                [[[1, 3], [3, 0, 1], [2], [0]]]
            ],
            solver: (rooms) => {
                const visited = new Set([0]);
                const q = [0];
                while (q.length > 0) {
                    const u = q.shift();
                    for (const key of rooms[u]) {
                        if (!visited.has(key)) {
                            visited.add(key);
                            q.push(key);
                        }
                    }
                }
                return visited.size === rooms.length;
            }
        }),

        // 11. Redundant Connection
        createProblem({
            title: "Redundant Connection in Graph",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["Union-Find"],
            dataStructures: ["Disjoint Set", "Graph"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "A tree is an undirected graph that is connected and has no cycles. You are given an undirected graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. Return an edge that can be removed so that the resulting graph is a tree of n nodes.",
            constraints: "n == edges.length\n3 <= n <= 1000\nedges[i].length == 2\n1 <= u_i < v_i <= edges.length",
            fnName: "findRedundantConnection",
            returnType: "vector<int>",
            params: [{ name: "edges", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[1, 2], [1, 3], [2, 3]]],
                [[[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]]
            ],
            solver: (edges) => {
                const parent = Array.from({ length: edges.length + 1 }, (_, i) => i);
                const find = (i) => parent[i] === i ? i : (parent[i] = find(parent[i]));
                for (const [u, v] of edges) {
                    const rootU = find(u);
                    const rootV = find(v);
                    if (rootU === rootV) return [u, v];
                    parent[rootU] = rootV;
                }
                return [];
            }
        }),

        // 12. Shortest Path in Binary Matrix
        createProblem({
            title: "Shortest Path in Binary Matrix",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["BFS"],
            dataStructures: ["Queue", "Matrix"],
            expectedTime: "O(n^2)",
            expectedSpace: "O(n^2)",
            description: "Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1. A clear path connects top-left (0, 0) and bottom-right (n-1, n-1) with 8-directionally adjacent 0-cells.",
            constraints: "n == grid.length == grid[i].length\n1 <= n <= 100\ngrid[i][j] is 0 or 1.",
            fnName: "shortestPathBinaryMatrix",
            returnType: "int",
            params: [{ name: "grid", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[0, 1], [1, 0]]],
                [[[0, 0, 0], [1, 1, 0], [1, 1, 0]]],
                [[[1, 0, 0], [1, 1, 0], [1, 1, 0]]]
            ],
            solver: (grid) => {
                const n = grid.length;
                if (grid[0][0] !== 0 || grid[n - 1][n - 1] !== 0) return -1;
                const q = [[0, 0, 1]];
                const visited = Array.from({ length: n }, () => new Array(n).fill(false));
                visited[0][0] = true;
                const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
                while (q.length > 0) {
                    const [r, c, dist] = q.shift();
                    if (r === n - 1 && c === n - 1) return dist;
                    for (const [dr, dc] of dirs) {
                        const nr = r + dr, nc = c + dc;
                        if (nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] === 0 && !visited[nr][nc]) {
                            visited[nr][nc] = true;
                            q.push([nr, nc, dist + 1]);
                        }
                    }
                }
                return -1;
            }
        }),

        // 13. All Paths From Source to Target Count
        createProblem({
            title: "Count All Paths From Source to Target",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["DFS", "Backtracking"],
            dataStructures: ["Graph", "Array"],
            expectedTime: "O(2^n * n)",
            expectedSpace: "O(n)",
            description: "Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find the total number of all possible paths from node 0 to node n - 1.",
            constraints: "n == graph.length\n2 <= n <= 15\n0 <= graph[i][j] < n\ngraph[i][j] != i\nAll elements of graph[i] are unique.\nThe input graph is guaranteed to be a DAG.",
            fnName: "countPaths",
            returnType: "int",
            params: [{ name: "graph", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[1, 2], [3], [3], []]],
                [[[4, 3, 1], [3, 2, 4], [3], [4], []]]
            ],
            solver: (graph) => {
                const target = graph.length - 1;
                let count = 0;
                const dfs = (u) => {
                    if (u === target) {
                        count++;
                        return;
                    }
                    for (const v of graph[u]) dfs(v);
                };
                dfs(0);
                return count;
            }
        }),

        // 14. Network Delay Time (Dijkstra)
        createProblem({
            title: "Network Delay Time",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["Dijkstra", "Shortest Path"],
            dataStructures: ["Graph", "Priority Queue"],
            expectedTime: "O(e log v)",
            expectedSpace: "O(v + e)",
            description: "You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (u_i, v_i, w_i). We will send a signal from node k. Return the minimum time it takes for all the n nodes to receive the signal. If impossible, return -1.",
            constraints: "1 <= k <= n <= 100\n1 <= times.length <= 6000\ntimes[i].length == 3\n1 <= u_i, v_i <= n\n1 <= w_i <= 100\nAll pairs (u_i, v_i) are unique.",
            fnName: "networkDelayTime",
            returnType: "int",
            params: [
                { name: "times", type: "vector<vector<int>>&" },
                { name: "n", type: "int" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2],
                [[[1, 2, 1]], 2, 1],
                [[[1, 2, 1]], 2, 2]
            ],
            solver: (times, n, k) => {
                const adj = Array.from({ length: n + 1 }, () => []);
                for (const [u, v, w] of times) adj[u].push([v, w]);
                const dist = new Array(n + 1).fill(Infinity);
                dist[k] = 0;
                const q = [[0, k]]; // [w, u]
                while (q.length > 0) {
                    q.sort((a, b) => a[0] - b[0]);
                    const [d, u] = q.shift();
                    if (d > dist[u]) continue;
                    for (const [v, w] of adj[u]) {
                        if (dist[u] + w < dist[v]) {
                            dist[v] = dist[u] + w;
                            q.push([dist[v], v]);
                        }
                    }
                }
                let maxDist = 0;
                for (let i = 1; i <= n; i++) {
                    if (dist[i] === Infinity) return -1;
                    maxDist = Math.max(maxDist, dist[i]);
                }
                return maxDist;
            }
        }),

        // 15. Graph Valid Tree Check
        createProblem({
            title: "Graph Valid Tree Check",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["DFS", "Union-Find"],
            dataStructures: ["Graph", "Disjoint Set"],
            expectedTime: "O(v + e)",
            expectedSpace: "O(v)",
            description: "Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.",
            constraints: "1 <= n <= 2000\n0 <= edges.length <= 5000",
            fnName: "validTree",
            returnType: "bool",
            params: [
                { name: "n", type: "int" },
                { name: "edges", type: "vector<vector<int>>&" }
            ],
            rawExamples: [
                [5, [[0, 1], [0, 2], [0, 3], [1, 4]]],
                [5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]]
            ],
            solver: (n, edges) => {
                if (edges.length !== n - 1) return false;
                const parent = Array.from({ length: n }, (_, i) => i);
                const find = (i) => parent[i] === i ? i : (parent[i] = find(parent[i]));
                for (const [u, v] of edges) {
                    const r1 = find(u), r2 = find(v);
                    if (r1 === r2) return false;
                    parent[r1] = r2;
                }
                return true;
            }
        }),

        // 16. As Far from Land as Possible
        createProblem({
            title: "As Far from Land as Possible Maximum Distance",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["BFS"],
            dataStructures: ["Queue", "Matrix"],
            expectedTime: "O(n^2)",
            expectedSpace: "O(n^2)",
            description: "Given an n x n grid containing only values 0 and 1, where 0 represents water and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized, and return the distance. If no land or water exists, return -1.",
            constraints: "n == grid.length == grid[i].length\n1 <= n <= 100\ngrid[i][j] is 0 or 1",
            fnName: "maxDistance",
            returnType: "int",
            params: [{ name: "grid", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[1, 0, 1], [0, 0, 0], [1, 0, 1]]],
                [[[1, 0, 0], [0, 0, 0], [0, 0, 0]]]
            ],
            solver: (grid) => {
                const n = grid.length;
                const q = [];
                for (let r = 0; r < n; r++) {
                    for (let c = 0; c < n; c++) {
                        if (grid[r][c] === 1) q.push([r, c, 0]);
                    }
                }
                if (q.length === 0 || q.length === n * n) return -1;
                let maxDist = -1;
                const visited = grid.map(r => [...r]);
                const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
                while (q.length > 0) {
                    const [r, c, d] = q.shift();
                    maxDist = Math.max(maxDist, d);
                    for (const [dr, dc] of dirs) {
                        const nr = r + dr, nc = c + dc;
                        if (nr >= 0 && nr < n && nc >= 0 && nc < n && visited[nr][nc] === 0) {
                            visited[nr][nc] = 1;
                            q.push([nr, nc, d + 1]);
                        }
                    }
                }
                return maxDist;
            }
        }),

        // 17. Number of Operations to Make Network Connected
        createProblem({
            title: "Operations to Make Network Connected",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["DFS", "Union-Find"],
            dataStructures: ["Graph", "Disjoint Set"],
            expectedTime: "O(n + e)",
            expectedSpace: "O(n)",
            description: "There are n computers numbered from 0 to n - 1 connected by ethernet cables connections. You can extract some cables connecting two computers and place them between any pair of disconnected computers to make them directly connected. Return minimum operations or -1 if impossible.",
            constraints: "1 <= n <= 10^5\n1 <= connections.length <= min(n * (n - 1) / 2, 10^5)",
            fnName: "makeConnected",
            returnType: "int",
            params: [
                { name: "n", type: "int" },
                { name: "connections", type: "vector<vector<int>>&" }
            ],
            rawExamples: [
                [4, [[0, 1], [0, 2], [1, 2]]],
                [6, [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3]]]
            ],
            solver: (n, connections) => {
                if (connections.length < n - 1) return -1;
                const parent = Array.from({ length: n }, (_, i) => i);
                let components = n;
                const find = (i) => parent[i] === i ? i : (parent[i] = find(parent[i]));
                for (const [u, v] of connections) {
                    const r1 = find(u), r2 = find(v);
                    if (r1 !== r2) {
                        parent[r1] = r2;
                        components--;
                    }
                }
                return components - 1;
            }
        }),

        // 18. Reorder Routes to Lead to City Zero
        createProblem({
            title: "Reorder Routes to Lead to City Zero Count",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["DFS", "BFS"],
            dataStructures: ["Graph", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities. Roads are represented by connections where connections[i] = [a, b] represents a road from city a to b. Return the minimum number of edges changed so that all cities can reach 0.",
            constraints: "2 <= n <= 5 * 10^4\nconnections.length == n - 1",
            fnName: "minReorder",
            returnType: "int",
            params: [
                { name: "n", type: "int" },
                { name: "connections", type: "vector<vector<int>>&" }
            ],
            rawExamples: [
                [6, [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]]],
                [5, [[1, 0], [1, 2], [3, 2], [3, 4]]]
            ],
            solver: (n, connections) => {
                const adj = Array.from({ length: n }, () => []);
                for (const [u, v] of connections) {
                    adj[u].push([v, 1]); // original direction
                    adj[v].push([u, 0]); // reversed direction
                }
                let changes = 0;
                const visited = new Array(n).fill(false);
                const q = [0];
                visited[0] = true;
                while (q.length > 0) {
                    const u = q.shift();
                    for (const [v, cost] of adj[u]) {
                        if (!visited[v]) {
                            visited[v] = true;
                            changes += cost;
                            q.push(v);
                        }
                    }
                }
                return changes;
            }
        }),

        // 19. Time Needed to Inform All Employees
        createProblem({
            title: "Time Needed to Inform All Employees",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["DFS", "Tree Traversal"],
            dataStructures: ["Graph", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "A company has n employees with a unique ID from 0 to n - 1. The head of the company has id headID. Each employee i has one direct manager given in manager[i]. Head has manager[headID] = -1. Return the total time needed to inform all employees about an urgent piece of news.",
            constraints: "1 <= n <= 10^5\n0 <= headID < n\nmanager.length == informTime.length == n",
            fnName: "numOfMinutes",
            returnType: "int",
            params: [
                { name: "n", type: "int" },
                { name: "headID", type: "int" },
                { name: "manager", type: "vector<int>&" },
                { name: "informTime", type: "vector<int>&" }
            ],
            rawExamples: [
                [1, 0, [-1], [0]],
                [6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0]]
            ],
            solver: (n, headID, manager, informTime) => {
                const subordinates = Array.from({ length: n }, () => []);
                for (let i = 0; i < n; i++) {
                    if (manager[i] !== -1) subordinates[manager[i]].push(i);
                }
                const dfs = (u) => {
                    let maxTime = 0;
                    for (const v of subordinates[u]) {
                        maxTime = Math.max(maxTime, dfs(v));
                    }
                    return informTime[u] + maxTime;
                };
                return dfs(headID);
            }
        }),

        // 20. Minimum Height Trees Roots Count
        createProblem({
            title: "Minimum Height Trees Smallest Root ID",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["Topological Sort", "BFS"],
            dataStructures: ["Graph", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "A tree is an undirected graph with no cycles. Find all the trees that have minimum height and return the smallest root label among these minimum height trees.",
            constraints: "1 <= n <= 2 * 10^4\nedges.length == n - 1",
            fnName: "findMinHeightTreeRoot",
            returnType: "int",
            params: [
                { name: "n", type: "int" },
                { name: "edges", type: "vector<vector<int>>&" }
            ],
            rawExamples: [
                [4, [[1, 0], [1, 2], [1, 3]]],
                [6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]]]
            ],
            solver: (n, edges) => {
                if (n === 1) return 0;
                const adj = Array.from({ length: n }, () => new Set());
                for (const [u, v] of edges) {
                    adj[u].add(v);
                    adj[v].add(u);
                }
                let leaves = [];
                for (let i = 0; i < n; i++) {
                    if (adj[i].size === 1) leaves.push(i);
                }
                let remaining = n;
                while (remaining > 2) {
                    remaining -= leaves.length;
                    const newLeaves = [];
                    for (const leaf of leaves) {
                        const neighbor = adj[leaf].values().next().value;
                        adj[neighbor].delete(leaf);
                        if (adj[neighbor].size === 1) newLeaves.push(neighbor);
                    }
                    leaves = newLeaves;
                }
                return Math.min(...leaves);
            }
        }),

        // 21. Path with Minimum Effort
        createProblem({
            title: "Path With Minimum Effort",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["Dijkstra", "Binary Search"],
            dataStructures: ["Matrix", "Priority Queue"],
            expectedTime: "O(r * c log(max_diff))",
            expectedSpace: "O(r * c)",
            description: "You are a hiker preparing for an upcoming hike. You are given heights of a 2D territory. A path's effort is the maximum absolute difference in heights between two consecutive cells. Return the minimum effort required to travel from top-left (0,0) to bottom-right (rows-1, cols-1).",
            constraints: "rows == heights.length\ncols == heights[i].length\n1 <= rows, cols <= 100\n1 <= heights[i][j] <= 10^6",
            fnName: "minimumEffortPath",
            returnType: "int",
            params: [{ name: "heights", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[1, 2, 2], [3, 8, 2], [5, 3, 5]]],
                [[[1, 2, 3], [3, 8, 4], [5, 3, 5]]]
            ],
            solver: (heights) => {
                const m = heights.length, n = heights[0].length;
                const dist = Array.from({ length: m }, () => new Array(n).fill(Infinity));
                dist[0][0] = 0;
                const q = [[0, 0, 0]]; // [effort, r, c]
                const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
                while (q.length > 0) {
                    q.sort((a, b) => a[0] - b[0]);
                    const [eff, r, c] = q.shift();
                    if (r === m - 1 && c === n - 1) return eff;
                    if (eff > dist[r][c]) continue;
                    for (const [dr, dc] of dirs) {
                        const nr = r + dr, nc = c + dc;
                        if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
                            const newEff = Math.max(eff, Math.abs(heights[r][c] - heights[nr][nc]));
                            if (newEff < dist[nr][nc]) {
                                dist[nr][nc] = newEff;
                                q.push([newEff, nr, nc]);
                            }
                        }
                    }
                }
                return 0;
            }
        }),

        // 22. Maximum Number of Fish in a Grid
        createProblem({
            title: "Maximum Number of Fish in a Grid",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["DFS", "BFS"],
            dataStructures: ["Matrix"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(m * n)",
            description: "You are given a 0-indexed 2D matrix grid of size m x n, where (r, c) represents the number of fish in that water cell (0 means land). A fisher can catch all fish in a connected component of water cells. Return the maximum number of fish the fisher can catch.",
            constraints: "m == grid.length\nn == grid[i].length\n1 <= m, n <= 10\n0 <= grid[i][j] <= 10",
            fnName: "findMaxFish",
            returnType: "int",
            params: [{ name: "grid", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[0, 2, 1, 0], [4, 0, 0, 3], [1, 0, 0, 4], [0, 3, 2, 0]]],
                [[[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1]]]
            ],
            solver: (grid) => {
                const g = grid.map(r => [...r]);
                const m = g.length, n = g[0].length;
                let maxFish = 0;
                const dfs = (r, c) => {
                    if (r < 0 || r >= m || c < 0 || c >= n || g[r][c] === 0) return 0;
                    const fish = g[r][c];
                    g[r][c] = 0;
                    return fish + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);
                };
                for (let r = 0; r < m; r++) {
                    for (let c = 0; c < n; c++) {
                        if (g[r][c] > 0) {
                            maxFish = Math.max(maxFish, dfs(r, c));
                        }
                    }
                }
                return maxFish;
            }
        }),

        // 23. Find Eventual Safe States Count
        createProblem({
            title: "Find Eventual Safe States Count",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["Topological Sort", "DFS"],
            dataStructures: ["Graph", "Array"],
            expectedTime: "O(v + e)",
            expectedSpace: "O(v)",
            description: "There is a directed graph of n nodes. A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node. Return the number of safe nodes in the graph.",
            constraints: "n == graph.length\n1 <= n <= 10^4\n0 <= graph[i].length <= n",
            fnName: "eventualSafeNodesCount",
            returnType: "int",
            params: [{ name: "graph", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[1, 2], [2, 3], [5], [0], [5], [], []]],
                [[[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []]]
            ],
            solver: (graph) => {
                const n = graph.length;
                const state = new Array(n).fill(0); // 0=unvisited, 1=visiting, 2=safe
                const isSafe = (u) => {
                    if (state[u] !== 0) return state[u] === 2;
                    state[u] = 1;
                    for (const v of graph[u]) {
                        if (!isSafe(v)) return false;
                    }
                    state[u] = 2;
                    return true;
                };
                let count = 0;
                for (let i = 0; i < n; i++) {
                    if (isSafe(i)) count++;
                }
                return count;
            }
        }),

        // 24. Clone Graph Node Count
        createProblem({
            title: "Adjacency List Node Count",
            topic: "Graphs",
            difficulty: "Easy",
            patterns: ["Graph"],
            dataStructures: ["Graph", "Array"],
            expectedTime: "O(v)",
            expectedSpace: "O(1)",
            description: "Given the adjacency list of a connected graph, return the number of nodes in the graph.",
            constraints: "0 <= adjList.length <= 100",
            fnName: "nodeCount",
            returnType: "int",
            params: [{ name: "adjList", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[2, 4], [1, 3], [2, 4], [1, 3]]],
                [[[]]],
                [[]]
            ],
            solver: (adjList) => adjList.length
        }),

        // 25. Number of Closed Islands
        createProblem({
            title: "Number of Closed Islands",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["DFS", "BFS"],
            dataStructures: ["Matrix"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(m * n)",
            description: "Given a 2D grid consists of 0s (land) and 1s (water). An island is a maximal 4-directionally connected group of 0s and a closed island is totally surrounded by 1s (not touching border). Return the number of closed islands.",
            constraints: "1 <= grid.length, grid[0].length <= 100\n0 <= grid[i][j] <= 1",
            fnName: "closedIsland",
            returnType: "int",
            params: [{ name: "grid", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 1, 0], [1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0]]],
                [[[0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [0, 1, 1, 1, 0]]]
            ],
            solver: (grid) => {
                const g = grid.map(r => [...r]);
                const m = g.length, n = g[0].length;
                const dfs = (r, c) => {
                    if (r < 0 || r >= m || c < 0 || c >= n) return false;
                    if (g[r][c] === 1) return true;
                    g[r][c] = 1;
                    const d1 = dfs(r + 1, c);
                    const d2 = dfs(r - 1, c);
                    const d3 = dfs(r, c + 1);
                    const d4 = dfs(r, c - 1);
                    return d1 && d2 && d3 && d4;
                };
                let closed = 0;
                for (let r = 0; r < m; r++) {
                    for (let c = 0; c < n; c++) {
                        if (g[r][c] === 0 && dfs(r, c)) closed++;
                    }
                }
                return closed;
            }
        }),

        // 26. Number of Enclaves
        createProblem({
            title: "Number of Enclaves",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["DFS", "BFS"],
            dataStructures: ["Matrix"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(m * n)",
            description: "You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell. A move consists of walking from one land cell to an adjacent land cell or walking off the boundary. Return the number of land cells in grid for which we cannot walk off the boundary.",
            constraints: "m == grid.length\nn == grid[i].length\n1 <= m, n <= 500\ngrid[i][j] is 0 or 1.",
            fnName: "numEnclaves",
            returnType: "int",
            params: [{ name: "grid", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]],
                [[[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]]]
            ],
            solver: (grid) => {
                const g = grid.map(r => [...r]);
                const m = g.length, n = g[0].length;
                const dfs = (r, c) => {
                    if (r < 0 || r >= m || c < 0 || c >= n || g[r][c] !== 1) return;
                    g[r][c] = 0;
                    dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1);
                };
                for (let r = 0; r < m; r++) {
                    if (g[r][0] === 1) dfs(r, 0);
                    if (g[r][n - 1] === 1) dfs(r, n - 1);
                }
                for (let c = 0; c < n; c++) {
                    if (g[0][c] === 1) dfs(0, c);
                    if (g[m - 1][c] === 1) dfs(m - 1, c);
                }
                let count = 0;
                for (let r = 0; r < m; r++) {
                    for (let c = 0; c < n; c++) {
                        if (g[r][c] === 1) count++;
                    }
                }
                return count;
            }
        }),

        // 27. Count Sub Islands
        createProblem({
            title: "Count Sub Islands",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["DFS"],
            dataStructures: ["Matrix"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(m * n)",
            description: "You are given two m x n binary matrices grid1 and grid2 containing only 0's (representing water) and 1's (representing land). An island in grid2 is a sub-island if every island cell in grid2 is also land in grid1. Return the number of sub-islands in grid2.",
            constraints: "m == grid1.length == grid2.length\nn == grid1[i].length == grid2[i].length\n1 <= m, n <= 500\ngrid1[i][j] and grid2[i][j] are either 0 or 1.",
            fnName: "countSubIslands",
            returnType: "int",
            params: [
                { name: "grid1", type: "vector<vector<int>>&" },
                { name: "grid2", type: "vector<vector<int>>&" }
            ],
            rawExamples: [
                [[[1, 1, 1, 0, 0], [0, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 0, 1, 1]], [[1, 1, 1, 0, 0], [0, 0, 1, 1, 1], [0, 1, 0, 0, 0], [1, 0, 1, 1, 0], [0, 1, 0, 1, 0]]],
                [[[1, 0, 1, 0, 1], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [1, 0, 1, 0, 1]], [[0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [1, 0, 0, 0, 1]]]
            ],
            solver: (grid1, grid2) => {
                const g2 = grid2.map(r => [...r]);
                const m = g2.length, n = g2[0].length;
                const dfs = (r, c) => {
                    if (r < 0 || r >= m || c < 0 || c >= n || g2[r][c] !== 1) return true;
                    g2[r][c] = 0;
                    let isSub = grid1[r][c] === 1;
                    const d1 = dfs(r + 1, c);
                    const d2 = dfs(r - 1, c);
                    const d3 = dfs(r, c + 1);
                    const d4 = dfs(r, c - 1);
                    return isSub && d1 && d2 && d3 && d4;
                };
                let count = 0;
                for (let r = 0; r < m; r++) {
                    for (let c = 0; c < n; c++) {
                        if (g2[r][c] === 1 && dfs(r, c)) count++;
                    }
                }
                return count;
            }
        }),

        // 28. Surrounded Regions Board Update
        createProblem({
            title: "Surrounded Regions O to X Count",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["DFS", "BFS"],
            dataStructures: ["Matrix"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(m * n)",
            description: "Given an m x n matrix board containing 'X' (1) and 'O' (0), capture all regions that are 4-directionally surrounded by 'X'. Return the count of captured 'O' cells converted to 'X'.",
            constraints: "m == board.length\nn == board[i].length\n1 <= m, n <= 200",
            fnName: "capturedRegionsCount",
            returnType: "int",
            params: [{ name: "board", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[1, 1, 1, 1], [1, 0, 0, 1], [1, 1, 0, 1], [1, 0, 1, 1]]],
                [[[1]]]
            ],
            solver: (board) => {
                const b = board.map(r => [...r]);
                const m = b.length, n = b[0].length;
                const dfs = (r, c) => {
                    if (r < 0 || r >= m || c < 0 || c >= n || b[r][c] !== 0) return;
                    b[r][c] = -1; // escaped
                    dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1);
                };
                for (let r = 0; r < m; r++) {
                    if (b[r][0] === 0) dfs(r, 0);
                    if (b[r][n - 1] === 0) dfs(r, n - 1);
                }
                for (let c = 0; c < n; c++) {
                    if (b[0][c] === 0) dfs(0, c);
                    if (b[m - 1][c] === 0) dfs(m - 1, c);
                }
                let captured = 0;
                for (let r = 0; r < m; r++) {
                    for (let c = 0; c < n; c++) {
                        if (b[r][c] === 0) captured++;
                    }
                }
                return captured;
            }
        }),

        // 29. Maximum Star Sum of a Graph
        createProblem({
            title: "Maximum Star Sum of a Graph",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["Greedy", "Graph"],
            dataStructures: ["Graph", "Array"],
            expectedTime: "O(n + e log k)",
            expectedSpace: "O(n + e)",
            description: "There is an undirected graph consisting of n nodes with values in vals. A star graph with center node center and at most k edges has star sum equal to vals[center] + sum of the values of up to k chosen neighbors. Return the maximum star sum of graph.",
            constraints: "n == vals.length\n1 <= n <= 10^5\n-10^4 <= vals[i] <= 10^4\n0 <= edges.length <= min(n * (n - 1) / 2, 10^5)\n0 <= k <= n - 1",
            fnName: "maxStarSum",
            returnType: "int",
            params: [
                { name: "vals", type: "vector<int>&" },
                { name: "edges", type: "vector<vector<int>>&" },
                { name: "k", type: "int" }
            ],
            rawExamples: [
                [[1, 2, 3, 4, 10, -10, -20], [[0, 1], [1, 2], [1, 3], [3, 4], [3, 5], [3, 6]], 2],
                [[-5], [], 0]
            ],
            solver: (vals, edges, k) => {
                const n = vals.length;
                const adj = Array.from({ length: n }, () => []);
                for (const [u, v] of edges) {
                    if (vals[v] > 0) adj[u].push(vals[v]);
                    if (vals[u] > 0) adj[v].push(vals[u]);
                }
                let maxSum = -Infinity;
                for (let i = 0; i < n; i++) {
                    adj[i].sort((a, b) => b - a);
                    let sum = vals[i];
                    for (let j = 0; j < Math.min(k, adj[i].length); j++) {
                        sum += adj[i][j];
                    }
                    maxSum = Math.max(maxSum, sum);
                }
                return maxSum;
            }
        }),

        // 30. All Paths From Source to Target Paths Count
        createProblem({
            title: "Course Schedule II First Course",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["Topological Sort"],
            dataStructures: ["Graph", "Array"],
            expectedTime: "O(v + e)",
            expectedSpace: "O(v + e)",
            description: "Given numCourses and prerequisites, return the first course you should take in a valid course ordering. If no ordering is possible, return -1.",
            constraints: "1 <= numCourses <= 2000",
            fnName: "findFirstCourse",
            returnType: "int",
            params: [
                { name: "numCourses", type: "int" },
                { name: "prerequisites", type: "vector<vector<int>>&" }
            ],
            rawExamples: [
                [2, [[1, 0]]],
                [4, [[1, 0], [2, 0], [3, 1], [3, 2]]],
                [2, [[1, 0], [0, 1]]]
            ],
            solver: (numCourses, prerequisites) => {
                const adj = Array.from({ length: numCourses }, () => []);
                const inDegree = new Array(numCourses).fill(0);
                for (const [a, b] of prerequisites) {
                    adj[b].push(a);
                    inDegree[a]++;
                }
                const q = [];
                for (let i = 0; i < numCourses; i++) {
                    if (inDegree[i] === 0) q.push(i);
                }
                const order = [];
                while (q.length > 0) {
                    const u = q.shift();
                    order.push(u);
                    for (const v of adj[u]) {
                        if (--inDegree[v] === 0) q.push(v);
                    }
                }
                return order.length === numCourses ? order[0] : -1;
            }
        }),

        // 31. Minimum Cost to Connect All Points (Prim's / Kruskal's MST)
        createProblem({
            title: "Minimum Cost to Connect All Points MST",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["Minimum Spanning Tree", "Greedy"],
            dataStructures: ["Graph", "Disjoint Set"],
            expectedTime: "O(n^2)",
            expectedSpace: "O(n)",
            description: "You are given an array points representing integer coordinates of some points on a 2D-plane. The cost of connecting two points is the Manhattan distance between them: |xi - xj| + |yi - yj|. Return the minimum cost to make all points connected.",
            constraints: "1 <= points.length <= 1000\n-10^6 <= xi, yi <= 10^6",
            fnName: "minCostConnectPoints",
            returnType: "int",
            params: [{ name: "points", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]],
                [[[3, 12], [-2, 5], [-4, 1]]]
            ],
            solver: (points) => {
                const n = points.length;
                const minDist = new Array(n).fill(Infinity);
                minDist[0] = 0;
                const inMST = new Array(n).fill(false);
                let totalCost = 0;
                for (let step = 0; step < n; step++) {
                    let u = -1;
                    for (let i = 0; i < n; i++) {
                        if (!inMST[i] && (u === -1 || minDist[i] < minDist[u])) u = i;
                    }
                    inMST[u] = true;
                    totalCost += minDist[u];
                    for (let v = 0; v < n; v++) {
                        if (!inMST[v]) {
                            const d = Math.abs(points[u][0] - points[v][0]) + Math.abs(points[u][1] - points[v][1]);
                            minDist[v] = Math.min(minDist[v], d);
                        }
                    }
                }
                return totalCost;
            }
        }),

        // 32. Pacific Atlantic Water Flow Island Count
        createProblem({
            title: "Pacific Atlantic Water Flow Cells Count",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["DFS", "BFS"],
            dataStructures: ["Matrix"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(m * n)",
            description: "There is an m x n rectangular island that borders both the Pacific Ocean (top and left edges) and Atlantic Ocean (bottom and right edges). Water can flow from a cell to adjacent cells of equal or lower height. Return the number of grid coordinates from which water can flow to both the Pacific and Atlantic oceans.",
            constraints: "m == heights.length\nn == heights[r].length\n1 <= m, n <= 200\n0 <= heights[r][c] <= 10^5",
            fnName: "pacificAtlanticCount",
            returnType: "int",
            params: [{ name: "heights", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]],
                [[[1]]]
            ],
            solver: (heights) => {
                const m = heights.length, n = heights[0].length;
                const pacific = Array.from({ length: m }, () => new Array(n).fill(false));
                const atlantic = Array.from({ length: m }, () => new Array(n).fill(false));
                const dfs = (r, c, ocean) => {
                    ocean[r][c] = true;
                    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
                    for (const [dr, dc] of dirs) {
                        const nr = r + dr, nc = c + dc;
                        if (nr >= 0 && nr < m && nc >= 0 && nc < n && !ocean[nr][nc] && heights[nr][nc] >= heights[r][c]) {
                            dfs(nr, nc, ocean);
                        }
                    }
                };
                for (let r = 0; r < m; r++) {
                    dfs(r, 0, pacific);
                    dfs(r, n - 1, atlantic);
                }
                for (let c = 0; c < n; c++) {
                    dfs(0, c, pacific);
                    dfs(m - 1, c, atlantic);
                }
                let count = 0;
                for (let r = 0; r < m; r++) {
                    for (let c = 0; c < n; c++) {
                        if (pacific[r][c] && atlantic[r][c]) count++;
                    }
                }
                return count;
            }
        }),

        // 33. Shortest Bridge Island Connection
        createProblem({
            title: "Shortest Bridge Between Two Islands",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["BFS", "DFS"],
            dataStructures: ["Matrix", "Queue"],
            expectedTime: "O(n^2)",
            expectedSpace: "O(n^2)",
            description: "You are given an n x n binary matrix grid where 1 represents land and 0 represents water. An island is a 4-directionally connected group of 1's. There are exactly two islands in grid. Return the smallest number of 0's you must flip to connect the two islands.",
            constraints: "n == grid.length == grid[i].length\n2 <= n <= 100\ngrid[i][j] is either 0 or 1.\nThere are exactly two islands in grid.",
            fnName: "shortestBridge",
            returnType: "int",
            params: [{ name: "grid", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[0, 1], [1, 0]]],
                [[[0, 1, 0], [0, 0, 0], [0, 0, 1]]],
                [[[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]]]
            ],
            solver: (grid) => {
                const n = grid.length;
                const g = grid.map(r => [...r]);
                const q = [];
                let found = false;
                const dfs = (r, c) => {
                    if (r < 0 || r >= n || c < 0 || c >= n || g[r][c] !== 1) return;
                    g[r][c] = 2;
                    q.push([r, c, 0]);
                    dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1);
                };
                for (let r = 0; r < n && !found; r++) {
                    for (let c = 0; c < n && !found; c++) {
                        if (g[r][c] === 1) {
                            dfs(r, c);
                            found = true;
                        }
                    }
                }
                const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
                while (q.length > 0) {
                    const [r, c, d] = q.shift();
                    for (const [dr, dc] of dirs) {
                        const nr = r + dr, nc = c + dc;
                        if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
                            if (g[nr][nc] === 1) return d;
                            if (g[nr][nc] === 0) {
                                g[nr][nc] = 2;
                                q.push([nr, nc, d + 1]);
                            }
                        }
                    }
                }
                return 0;
            }
        }),

        // 34. Distance of Nearest Cell Having 1 (01 Matrix)
        createProblem({
            title: "01 Matrix Nearest 0 Distance Sum",
            topic: "Graphs",
            difficulty: "Medium",
            patterns: ["BFS"],
            dataStructures: ["Matrix", "Queue"],
            expectedTime: "O(m * n)",
            expectedSpace: "O(m * n)",
            description: "Given an m x n binary matrix mat, find the distance of the nearest 0 for each cell. Return the sum of all distances across the entire matrix.",
            constraints: "m == mat.length\nn == mat[i].length\n1 <= m, n <= 10^4\n1 <= m * n <= 10^4\nmat[i][j] is either 0 or 1.\nThere is at least one 0 in mat.",
            fnName: "matrixDistanceSum",
            returnType: "int",
            params: [{ name: "mat", type: "vector<vector<int>>&" }],
            rawExamples: [
                [[[0, 0, 0], [0, 1, 0], [0, 0, 0]]],
                [[[0, 0, 0], [0, 1, 0], [1, 1, 1]]]
            ],
            solver: (mat) => {
                const m = mat.length, n = mat[0].length;
                const dist = Array.from({ length: m }, () => new Array(n).fill(-1));
                const q = [];
                for (let r = 0; r < m; r++) {
                    for (let c = 0; c < n; c++) {
                        if (mat[r][c] === 0) {
                            dist[r][c] = 0;
                            q.push([r, c]);
                        }
                    }
                }
                const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
                let totalDist = 0;
                while (q.length > 0) {
                    const [r, c] = q.shift();
                    totalDist += dist[r][c];
                    for (const [dr, dc] of dirs) {
                        const nr = r + dr, nc = c + dc;
                        if (nr >= 0 && nr < m && nc >= 0 && nc < n && dist[nr][nc] === -1) {
                            dist[nr][nc] = dist[r][c] + 1;
                            q.push([nr, nc]);
                        }
                    }
                }
                return totalDist;
            }
        }),

        // 35. Word Ladder Minimum Transformations
        createProblem({
            title: "Word Ladder Transformation Length",
            topic: "Graphs",
            difficulty: "Hard",
            patterns: ["BFS"],
            dataStructures: ["Graph", "Queue", "Hash Set"],
            expectedTime: "O(n * l^2)",
            expectedSpace: "O(n * l)",
            description: "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that every adjacent pair differs by a single letter. Return the number of words in the shortest transformation sequence, or 0 if no such sequence exists.",
            constraints: "1 <= beginWord.length <= 10\nendWord.length == beginWord.length\n1 <= wordList.length <= 5000\nwordList[i].length == beginWord.length\nAll strings consist of lowercase English letters.\nbeginWord != endWord\nAll strings in wordList are unique.",
            fnName: "ladderLength",
            returnType: "int",
            params: [
                { name: "beginWord", type: "string" },
                { name: "endWord", type: "string" },
                { name: "wordList", type: "vector<string>&" }
            ],
            rawExamples: [
                ["hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]],
                ["hit", "cog", ["hot", "dot", "dog", "lot", "log"]]
            ],
            solver: (beginWord, endWord, wordList) => {
                const words = new Set(wordList);
                if (!words.has(endWord)) return 0;
                const q = [[beginWord, 1]];
                const visited = new Set([beginWord]);
                while (q.length > 0) {
                    const [w, len] = q.shift();
                    if (w === endWord) return len;
                    for (let i = 0; i < w.length; i++) {
                        for (let code = 97; code <= 122; code++) {
                            const nw = w.slice(0, i) + String.fromCharCode(code) + w.slice(i + 1);
                            if (words.has(nw) && !visited.has(nw)) {
                                visited.add(nw);
                                q.push([nw, len + 1]);
                            }
                        }
                    }
                }
                return 0;
            }
        })
    ];
}
