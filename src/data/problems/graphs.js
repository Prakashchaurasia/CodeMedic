/**
 * Graphs Problems Dataset (35 problems)
 * CodeMedic Verified DSA Collection
 */

export const GRAPH_PROBLEMS = [
    {
        "id": "43698e9f-3b83-4d3f-a6f1-3189c08c4a32",
        "title": "Number of Islands",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "BFS",
            "DFS"
        ],
        "data_structures": [
            "Matrix",
            "Queue"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(m * n)",
        "description": "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
        "constraints": "m == grid.length\nn == grid[i].length\n1 <= m, n <= 300\ngrid[i][j] is '0' or '1'.",
        "input_format": "vector<vector<int>>& grid",
        "output_format": "int",
        "examples": [
            {
                "input": "grid = [[1,1,1,1,0],[1,1,0,1,0],[1,1,0,0,0],[0,0,0,0,0]]",
                "output": "1",
                "explanation": "For the given input grid = [[1,1,1,1,0],[1,1,0,1,0],[1,1,0,0,0],[0,0,0,0,0]], the expected output is 1."
            },
            {
                "input": "grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]]",
                "output": "3",
                "explanation": "For the given input grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]], the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Number of Islands.",
        "execution_config": {
            "functionName": "numIslands",
            "returnType": "int",
            "parameters": [
                {
                    "name": "grid",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "2732f1b3-a8b7-49e1-acb7-749e4acba0ba",
        "title": "Max Area of Island",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "DFS",
            "BFS"
        ],
        "data_structures": [
            "Matrix"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(m * n)",
        "description": "You are given an m x n binary matrix grid. An island is a group of 1's connected 4-directionally. The area of an island is the number of cells with a value 1 in the island. Return the maximum area of an island in grid. If there is no island, return 0.",
        "constraints": "m == grid.length\nn == grid[i].length\n1 <= m, n <= 50\ngrid[i][j] is either 0 or 1.",
        "input_format": "vector<vector<int>>& grid",
        "output_format": "int",
        "examples": [
            {
                "input": "grid = [[0,0,1,0,0],[1,1,1,0,0],[0,1,0,0,1]]",
                "output": "5",
                "explanation": "For the given input grid = [[0,0,1,0,0],[1,1,1,0,0],[0,1,0,0,1]], the expected output is 5."
            },
            {
                "input": "grid = [[0,0,0,0,0]]",
                "output": "0",
                "explanation": "For the given input grid = [[0,0,0,0,0]], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Max Area of Island.",
        "execution_config": {
            "functionName": "maxAreaOfIsland",
            "returnType": "int",
            "parameters": [
                {
                    "name": "grid",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "1ba7b5ee-7716-446c-a3fb-f8e6db260f7d",
        "title": "Flood Fill",
        "topic": "Graphs",
        "difficulty": "Easy",
        "patterns": [
            "DFS",
            "BFS"
        ],
        "data_structures": [
            "Matrix"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(m * n)",
        "description": "An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image. Perform a flood fill on the image starting from the pixel image[sr][sc] with color color. Return the modified image.",
        "constraints": "m == image.length\nn == image[i].length\n1 <= m, n <= 50\n0 <= image[i][j], color < 65536\n0 <= sr < m\n0 <= sc < n",
        "input_format": "vector<vector<int>>& image, int sr, int sc, int color",
        "output_format": "vector<vector<int>>",
        "examples": [
            {
                "input": "image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2",
                "output": "[[2,2,2],[2,2,0],[2,0,1]]",
                "explanation": "For the given input image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2, the expected output is [[2,2,2],[2,2,0],[2,0,1]]."
            },
            {
                "input": "image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0",
                "output": "[[0,0,0],[0,0,0]]",
                "explanation": "For the given input image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0, the expected output is [[0,0,0],[0,0,0]]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Flood Fill.",
        "execution_config": {
            "functionName": "floodFill",
            "returnType": "vector<vector<int>>",
            "parameters": [
                {
                    "name": "image",
                    "type": "vector<vector<int>>&"
                },
                {
                    "name": "sr",
                    "type": "int"
                },
                {
                    "name": "sc",
                    "type": "int"
                },
                {
                    "name": "color",
                    "type": "int"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "e8b7800b-a371-4f79-a5d5-7086ec95bd32",
        "title": "Rotting Oranges Minimum Minutes",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "BFS"
        ],
        "data_structures": [
            "Queue",
            "Matrix"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(m * n)",
        "description": "You are given an m x n grid where 0 is empty, 1 is fresh orange, and 2 is rotten orange. Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no cell has a fresh orange. If impossible, return -1.",
        "constraints": "m == grid.length\nn == grid[i].length\n1 <= m, n <= 10\ngrid[i][j] is 0, 1, or 2.",
        "input_format": "vector<vector<int>>& grid",
        "output_format": "int",
        "examples": [
            {
                "input": "grid = [[2,1,1],[1,1,0],[0,1,1]]",
                "output": "4",
                "explanation": "For the given input grid = [[2,1,1],[1,1,0],[0,1,1]], the expected output is 4."
            },
            {
                "input": "grid = [[2,1,1],[0,1,1],[1,0,1]]",
                "output": "-1",
                "explanation": "For the given input grid = [[2,1,1],[0,1,1],[1,0,1]], the expected output is -1."
            },
            {
                "input": "grid = [[0,2]]",
                "output": "0",
                "explanation": "For the given input grid = [[0,2]], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Rotting Oranges Minimum Minutes.",
        "execution_config": {
            "functionName": "orangesRotting",
            "returnType": "int",
            "parameters": [
                {
                    "name": "grid",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "6e1fa661-a0b7-41c7-a703-2911338d823f",
        "title": "Course Schedule Cycle Detection",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "Topological Sort",
            "DFS"
        ],
        "data_structures": [
            "Graph",
            "Array"
        ],
        "expected_time": "O(v + e)",
        "expected_space": "O(v + e)",
        "description": "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [a_i, b_i] indicates that you must take course b_i first if you want to take course a_i. Return true if you can finish all courses.",
        "constraints": "1 <= numCourses <= 2000\n0 <= prerequisites.length <= 5000\nprerequisites[i].length == 2\n0 <= a_i, b_i < numCourses\nAll pairs [a_i, b_i] are distinct.",
        "input_format": "int numCourses, vector<vector<int>>& prerequisites",
        "output_format": "bool",
        "examples": [
            {
                "input": "numCourses = 2, prerequisites = [[1,0]]",
                "output": "true",
                "explanation": "For the given input numCourses = 2, prerequisites = [[1,0]], the expected output is true."
            },
            {
                "input": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
                "output": "false",
                "explanation": "For the given input numCourses = 2, prerequisites = [[1,0],[0,1]], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Course Schedule Cycle Detection.",
        "execution_config": {
            "functionName": "canFinish",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "numCourses",
                    "type": "int"
                },
                {
                    "name": "prerequisites",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "7a45399b-915a-4c5e-ae4d-a86df70cf668",
        "title": "Number of Provinces Connected Components",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "DFS",
            "Union-Find"
        ],
        "data_structures": [
            "Graph",
            "Matrix"
        ],
        "expected_time": "O(n^2)",
        "expected_space": "O(n)",
        "description": "There are n cities. An n x n matrix isConnected gives connection between cities: isConnected[i][j] = 1 if city i and city j are directly connected. Return the total number of provinces (connected components).",
        "constraints": "1 <= n <= 200\nn == isConnected.length == isConnected[i].length\nisConnected[i][j] is 1 or 0.\nisConnected[i][i] == 1\nisConnected[i][j] == isConnected[j][i]",
        "input_format": "vector<vector<int>>& isConnected",
        "output_format": "int",
        "examples": [
            {
                "input": "isConnected = [[1,1,0],[1,1,0],[0,0,1]]",
                "output": "2",
                "explanation": "For the given input isConnected = [[1,1,0],[1,1,0],[0,0,1]], the expected output is 2."
            },
            {
                "input": "isConnected = [[1,0,0],[0,1,0],[0,0,1]]",
                "output": "3",
                "explanation": "For the given input isConnected = [[1,0,0],[0,1,0],[0,0,1]], the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Number of Provinces Connected Components.",
        "execution_config": {
            "functionName": "findCircleNum",
            "returnType": "int",
            "parameters": [
                {
                    "name": "isConnected",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "77d44bbf-9537-4f2d-a9ce-afe55fbc0a2a",
        "title": "Is Graph Bipartite?",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "BFS",
            "DFS"
        ],
        "data_structures": [
            "Graph",
            "Array"
        ],
        "expected_time": "O(v + e)",
        "expected_space": "O(v)",
        "description": "There is an undirected graph with n nodes. Given an adjacency list graph where graph[u] is an array of nodes adjacent to u, return true if and only if it is bipartite.",
        "constraints": "graph.length == n\n1 <= n <= 100\n0 <= graph[u].length < n\n0 <= graph[u][i] <= n - 1\ngraph[u] does not contain u.\nAll values of graph[u] are unique.",
        "input_format": "vector<vector<int>>& graph",
        "output_format": "bool",
        "examples": [
            {
                "input": "graph = [[1,2,3],[0,2],[0,1,3],[0,2]]",
                "output": "false",
                "explanation": "For the given input graph = [[1,2,3],[0,2],[0,1,3],[0,2]], the expected output is false."
            },
            {
                "input": "graph = [[1,3],[0,2],[1,3],[0,2]]",
                "output": "true",
                "explanation": "For the given input graph = [[1,3],[0,2],[1,3],[0,2]], the expected output is true."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Is Graph Bipartite?.",
        "execution_config": {
            "functionName": "isBipartite",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "graph",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "36b67b58-eb3b-43a2-a431-11f318b5bf6e",
        "title": "Find Center of Star Graph",
        "topic": "Graphs",
        "difficulty": "Easy",
        "patterns": [
            "Graph"
        ],
        "data_structures": [
            "Graph",
            "Array"
        ],
        "expected_time": "O(1)",
        "expected_space": "O(1)",
        "description": "There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node connected to every other node. Given the 2D integer array edges, return the center of the given star graph.",
        "constraints": "3 <= n <= 10^5\nedges.length == n - 1\nedges[i].length == 2\n1 <= u_i, v_i <= n",
        "input_format": "vector<vector<int>>& edges",
        "output_format": "int",
        "examples": [
            {
                "input": "edges = [[1,2],[2,3],[4,2]]",
                "output": "2",
                "explanation": "For the given input edges = [[1,2],[2,3],[4,2]], the expected output is 2."
            },
            {
                "input": "edges = [[1,2],[5,1],[1,3],[1,4]]",
                "output": "1",
                "explanation": "For the given input edges = [[1,2],[5,1],[1,3],[1,4]], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Find Center of Star Graph.",
        "execution_config": {
            "functionName": "findCenter",
            "returnType": "int",
            "parameters": [
                {
                    "name": "edges",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "047f1478-daa7-4d6a-a0e7-8a570ccecfaf",
        "title": "Find if Path Exists in Graph",
        "topic": "Graphs",
        "difficulty": "Easy",
        "patterns": [
            "DFS",
            "BFS",
            "Union-Find"
        ],
        "data_structures": [
            "Graph",
            "Array"
        ],
        "expected_time": "O(v + e)",
        "expected_space": "O(v + e)",
        "description": "There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1. Given 2D integer array edges and integers source and destination, return true if there is a valid path from source to destination.",
        "constraints": "1 <= n <= 2 * 10^5\n0 <= edges.length <= 2 * 10^5\nedges[i].length == 2\n0 <= u_i, v_i <= n - 1\n0 <= source, destination <= n - 1",
        "input_format": "int n, vector<vector<int>>& edges, int source, int destination",
        "output_format": "bool",
        "examples": [
            {
                "input": "n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2",
                "output": "true",
                "explanation": "For the given input n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2, the expected output is true."
            },
            {
                "input": "n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5",
                "output": "false",
                "explanation": "For the given input n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5, the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Find if Path Exists in Graph.",
        "execution_config": {
            "functionName": "validPath",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "n",
                    "type": "int"
                },
                {
                    "name": "edges",
                    "type": "vector<vector<int>>&"
                },
                {
                    "name": "source",
                    "type": "int"
                },
                {
                    "name": "destination",
                    "type": "int"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "2d71cb5c-3cf5-4a28-a287-c1a85a4be988",
        "title": "Keys and Rooms Can Visit All",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "BFS",
            "DFS"
        ],
        "data_structures": [
            "Graph",
            "Array"
        ],
        "expected_time": "O(n + e)",
        "expected_space": "O(n)",
        "description": "There are n rooms labeled from 0 to n - 1 and all the rooms are locked, except for room 0. Each room has a list of keys to other rooms. Return true if you can visit all the rooms, or false otherwise.",
        "constraints": "n == rooms.length\n2 <= n <= 1000\n0 <= rooms[i].length <= 1000\n1 <= sum(rooms[i].length) <= 3000\n0 <= rooms[i][j] < n",
        "input_format": "vector<vector<int>>& rooms",
        "output_format": "bool",
        "examples": [
            {
                "input": "rooms = [[1],[2],[3],[]]",
                "output": "true",
                "explanation": "For the given input rooms = [[1],[2],[3],[]], the expected output is true."
            },
            {
                "input": "rooms = [[1,3],[3,0,1],[2],[0]]",
                "output": "false",
                "explanation": "For the given input rooms = [[1,3],[3,0,1],[2],[0]], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Keys and Rooms Can Visit All.",
        "execution_config": {
            "functionName": "canVisitAllRooms",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "rooms",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "bc7d2d13-12c8-4d2e-a294-b25dea06bef6",
        "title": "Redundant Connection in Graph",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "Union-Find"
        ],
        "data_structures": [
            "Disjoint Set",
            "Graph"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "A tree is an undirected graph that is connected and has no cycles. You are given an undirected graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. Return an edge that can be removed so that the resulting graph is a tree of n nodes.",
        "constraints": "n == edges.length\n3 <= n <= 1000\nedges[i].length == 2\n1 <= u_i < v_i <= edges.length",
        "input_format": "vector<vector<int>>& edges",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "edges = [[1,2],[1,3],[2,3]]",
                "output": "[2,3]",
                "explanation": "For the given input edges = [[1,2],[1,3],[2,3]], the expected output is [2,3]."
            },
            {
                "input": "edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]",
                "output": "[1,4]",
                "explanation": "For the given input edges = [[1,2],[2,3],[3,4],[1,4],[1,5]], the expected output is [1,4]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Redundant Connection in Graph.",
        "execution_config": {
            "functionName": "findRedundantConnection",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "edges",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "bf722f27-5c1c-4fe5-a942-79cbc2601907",
        "title": "Shortest Path in Binary Matrix",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "BFS"
        ],
        "data_structures": [
            "Queue",
            "Matrix"
        ],
        "expected_time": "O(n^2)",
        "expected_space": "O(n^2)",
        "description": "Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1. A clear path connects top-left (0, 0) and bottom-right (n-1, n-1) with 8-directionally adjacent 0-cells.",
        "constraints": "n == grid.length == grid[i].length\n1 <= n <= 100\ngrid[i][j] is 0 or 1.",
        "input_format": "vector<vector<int>>& grid",
        "output_format": "int",
        "examples": [
            {
                "input": "grid = [[0,1],[1,0]]",
                "output": "2",
                "explanation": "For the given input grid = [[0,1],[1,0]], the expected output is 2."
            },
            {
                "input": "grid = [[0,0,0],[1,1,0],[1,1,0]]",
                "output": "4",
                "explanation": "For the given input grid = [[0,0,0],[1,1,0],[1,1,0]], the expected output is 4."
            },
            {
                "input": "grid = [[1,0,0],[1,1,0],[1,1,0]]",
                "output": "-1",
                "explanation": "For the given input grid = [[1,0,0],[1,1,0],[1,1,0]], the expected output is -1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Shortest Path in Binary Matrix.",
        "execution_config": {
            "functionName": "shortestPathBinaryMatrix",
            "returnType": "int",
            "parameters": [
                {
                    "name": "grid",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "b9e26b11-7219-442b-af0c-dfa6da404e27",
        "title": "Count All Paths From Source to Target",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "DFS",
            "Backtracking"
        ],
        "data_structures": [
            "Graph",
            "Array"
        ],
        "expected_time": "O(2^n * n)",
        "expected_space": "O(n)",
        "description": "Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find the total number of all possible paths from node 0 to node n - 1.",
        "constraints": "n == graph.length\n2 <= n <= 15\n0 <= graph[i][j] < n\ngraph[i][j] != i\nAll elements of graph[i] are unique.\nThe input graph is guaranteed to be a DAG.",
        "input_format": "vector<vector<int>>& graph",
        "output_format": "int",
        "examples": [
            {
                "input": "graph = [[1,2],[3],[3],[]]",
                "output": "2",
                "explanation": "For the given input graph = [[1,2],[3],[3],[]], the expected output is 2."
            },
            {
                "input": "graph = [[4,3,1],[3,2,4],[3],[4],[]]",
                "output": "5",
                "explanation": "For the given input graph = [[4,3,1],[3,2,4],[3],[4],[]], the expected output is 5."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Count All Paths From Source to Target.",
        "execution_config": {
            "functionName": "countPaths",
            "returnType": "int",
            "parameters": [
                {
                    "name": "graph",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "db55fc9f-f863-4c93-a1d5-5a122c0a00a3",
        "title": "Network Delay Time",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "Dijkstra",
            "Shortest Path"
        ],
        "data_structures": [
            "Graph",
            "Priority Queue"
        ],
        "expected_time": "O(e log v)",
        "expected_space": "O(v + e)",
        "description": "You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (u_i, v_i, w_i). We will send a signal from node k. Return the minimum time it takes for all the n nodes to receive the signal. If impossible, return -1.",
        "constraints": "1 <= k <= n <= 100\n1 <= times.length <= 6000\ntimes[i].length == 3\n1 <= u_i, v_i <= n\n1 <= w_i <= 100\nAll pairs (u_i, v_i) are unique.",
        "input_format": "vector<vector<int>>& times, int n, int k",
        "output_format": "int",
        "examples": [
            {
                "input": "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2",
                "output": "2",
                "explanation": "For the given input times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2, the expected output is 2."
            },
            {
                "input": "times = [[1,2,1]], n = 2, k = 1",
                "output": "1",
                "explanation": "For the given input times = [[1,2,1]], n = 2, k = 1, the expected output is 1."
            },
            {
                "input": "times = [[1,2,1]], n = 2, k = 2",
                "output": "-1",
                "explanation": "For the given input times = [[1,2,1]], n = 2, k = 2, the expected output is -1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Network Delay Time.",
        "execution_config": {
            "functionName": "networkDelayTime",
            "returnType": "int",
            "parameters": [
                {
                    "name": "times",
                    "type": "vector<vector<int>>&"
                },
                {
                    "name": "n",
                    "type": "int"
                },
                {
                    "name": "k",
                    "type": "int"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "b3dd10d1-4166-4bf7-abcb-fcf72c9be8b7",
        "title": "Graph Valid Tree Check",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "DFS",
            "Union-Find"
        ],
        "data_structures": [
            "Graph",
            "Disjoint Set"
        ],
        "expected_time": "O(v + e)",
        "expected_space": "O(v)",
        "description": "Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.",
        "constraints": "1 <= n <= 2000\n0 <= edges.length <= 5000",
        "input_format": "int n, vector<vector<int>>& edges",
        "output_format": "bool",
        "examples": [
            {
                "input": "n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]",
                "output": "true",
                "explanation": "For the given input n = 5, edges = [[0,1],[0,2],[0,3],[1,4]], the expected output is true."
            },
            {
                "input": "n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]",
                "output": "false",
                "explanation": "For the given input n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Graph Valid Tree Check.",
        "execution_config": {
            "functionName": "validTree",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "n",
                    "type": "int"
                },
                {
                    "name": "edges",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "1a47b576-e779-4701-ad7b-ca5635d17485",
        "title": "As Far from Land as Possible Maximum Distance",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "BFS"
        ],
        "data_structures": [
            "Queue",
            "Matrix"
        ],
        "expected_time": "O(n^2)",
        "expected_space": "O(n^2)",
        "description": "Given an n x n grid containing only values 0 and 1, where 0 represents water and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized, and return the distance. If no land or water exists, return -1.",
        "constraints": "n == grid.length == grid[i].length\n1 <= n <= 100\ngrid[i][j] is 0 or 1",
        "input_format": "vector<vector<int>>& grid",
        "output_format": "int",
        "examples": [
            {
                "input": "grid = [[1,0,1],[0,0,0],[1,0,1]]",
                "output": "2",
                "explanation": "For the given input grid = [[1,0,1],[0,0,0],[1,0,1]], the expected output is 2."
            },
            {
                "input": "grid = [[1,0,0],[0,0,0],[0,0,0]]",
                "output": "4",
                "explanation": "For the given input grid = [[1,0,0],[0,0,0],[0,0,0]], the expected output is 4."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for As Far from Land as Possible Maximum Distance.",
        "execution_config": {
            "functionName": "maxDistance",
            "returnType": "int",
            "parameters": [
                {
                    "name": "grid",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "e1f14ee1-91d4-4ca6-ad74-14d526da25dd",
        "title": "Operations to Make Network Connected",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "DFS",
            "Union-Find"
        ],
        "data_structures": [
            "Graph",
            "Disjoint Set"
        ],
        "expected_time": "O(n + e)",
        "expected_space": "O(n)",
        "description": "There are n computers numbered from 0 to n - 1 connected by ethernet cables connections. You can extract some cables connecting two computers and place them between any pair of disconnected computers to make them directly connected. Return minimum operations or -1 if impossible.",
        "constraints": "1 <= n <= 10^5\n1 <= connections.length <= min(n * (n - 1) / 2, 10^5)",
        "input_format": "int n, vector<vector<int>>& connections",
        "output_format": "int",
        "examples": [
            {
                "input": "n = 4, connections = [[0,1],[0,2],[1,2]]",
                "output": "1",
                "explanation": "For the given input n = 4, connections = [[0,1],[0,2],[1,2]], the expected output is 1."
            },
            {
                "input": "n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]]",
                "output": "2",
                "explanation": "For the given input n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]], the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Operations to Make Network Connected.",
        "execution_config": {
            "functionName": "makeConnected",
            "returnType": "int",
            "parameters": [
                {
                    "name": "n",
                    "type": "int"
                },
                {
                    "name": "connections",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "98681e1b-2293-4367-ad04-81b15d4b8d11",
        "title": "Reorder Routes to Lead to City Zero Count",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "DFS",
            "BFS"
        ],
        "data_structures": [
            "Graph",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities. Roads are represented by connections where connections[i] = [a, b] represents a road from city a to b. Return the minimum number of edges changed so that all cities can reach 0.",
        "constraints": "2 <= n <= 5 * 10^4\nconnections.length == n - 1",
        "input_format": "int n, vector<vector<int>>& connections",
        "output_format": "int",
        "examples": [
            {
                "input": "n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]",
                "output": "3",
                "explanation": "For the given input n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]], the expected output is 3."
            },
            {
                "input": "n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]",
                "output": "2",
                "explanation": "For the given input n = 5, connections = [[1,0],[1,2],[3,2],[3,4]], the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Reorder Routes to Lead to City Zero Count.",
        "execution_config": {
            "functionName": "minReorder",
            "returnType": "int",
            "parameters": [
                {
                    "name": "n",
                    "type": "int"
                },
                {
                    "name": "connections",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "4003b128-42b9-4d87-ad23-ea2c3b40509d",
        "title": "Time Needed to Inform All Employees",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "DFS",
            "Tree Traversal"
        ],
        "data_structures": [
            "Graph",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "A company has n employees with a unique ID from 0 to n - 1. The head of the company has id headID. Each employee i has one direct manager given in manager[i]. Head has manager[headID] = -1. Return the total time needed to inform all employees about an urgent piece of news.",
        "constraints": "1 <= n <= 10^5\n0 <= headID < n\nmanager.length == informTime.length == n",
        "input_format": "int n, int headID, vector<int>& manager, vector<int>& informTime",
        "output_format": "int",
        "examples": [
            {
                "input": "n = 1, headID = 0, manager = [-1], informTime = [0]",
                "output": "0",
                "explanation": "For the given input n = 1, headID = 0, manager = [-1], informTime = [0], the expected output is 0."
            },
            {
                "input": "n = 6, headID = 2, manager = [2,2,-1,2,2,2], informTime = [0,0,1,0,0,0]",
                "output": "1",
                "explanation": "For the given input n = 6, headID = 2, manager = [2,2,-1,2,2,2], informTime = [0,0,1,0,0,0], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Time Needed to Inform All Employees.",
        "execution_config": {
            "functionName": "numOfMinutes",
            "returnType": "int",
            "parameters": [
                {
                    "name": "n",
                    "type": "int"
                },
                {
                    "name": "headID",
                    "type": "int"
                },
                {
                    "name": "manager",
                    "type": "vector<int>&"
                },
                {
                    "name": "informTime",
                    "type": "vector<int>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "8d1de3be-8261-4bae-a6ab-ff12ab575d3d",
        "title": "Minimum Height Trees Smallest Root ID",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "Topological Sort",
            "BFS"
        ],
        "data_structures": [
            "Graph",
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "A tree is an undirected graph with no cycles. Find all the trees that have minimum height and return the smallest root label among these minimum height trees.",
        "constraints": "1 <= n <= 2 * 10^4\nedges.length == n - 1",
        "input_format": "int n, vector<vector<int>>& edges",
        "output_format": "int",
        "examples": [
            {
                "input": "n = 4, edges = [[1,0],[1,2],[1,3]]",
                "output": "1",
                "explanation": "For the given input n = 4, edges = [[1,0],[1,2],[1,3]], the expected output is 1."
            },
            {
                "input": "n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]",
                "output": "3",
                "explanation": "For the given input n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]], the expected output is 3."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Height Trees Smallest Root ID.",
        "execution_config": {
            "functionName": "findMinHeightTreeRoot",
            "returnType": "int",
            "parameters": [
                {
                    "name": "n",
                    "type": "int"
                },
                {
                    "name": "edges",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "fe9b2555-19bb-4093-a1ea-08be7286dccf",
        "title": "Path With Minimum Effort",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "Dijkstra",
            "Binary Search"
        ],
        "data_structures": [
            "Matrix",
            "Priority Queue"
        ],
        "expected_time": "O(r * c log(max_diff))",
        "expected_space": "O(r * c)",
        "description": "You are a hiker preparing for an upcoming hike. You are given heights of a 2D territory. A path's effort is the maximum absolute difference in heights between two consecutive cells. Return the minimum effort required to travel from top-left (0,0) to bottom-right (rows-1, cols-1).",
        "constraints": "rows == heights.length\ncols == heights[i].length\n1 <= rows, cols <= 100\n1 <= heights[i][j] <= 10^6",
        "input_format": "vector<vector<int>>& heights",
        "output_format": "int",
        "examples": [
            {
                "input": "heights = [[1,2,2],[3,8,2],[5,3,5]]",
                "output": "2",
                "explanation": "For the given input heights = [[1,2,2],[3,8,2],[5,3,5]], the expected output is 2."
            },
            {
                "input": "heights = [[1,2,3],[3,8,4],[5,3,5]]",
                "output": "1",
                "explanation": "For the given input heights = [[1,2,3],[3,8,4],[5,3,5]], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Path With Minimum Effort.",
        "execution_config": {
            "functionName": "minimumEffortPath",
            "returnType": "int",
            "parameters": [
                {
                    "name": "heights",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "81c7a68a-e54a-4195-a477-f8056110d6b4",
        "title": "Maximum Number of Fish in a Grid",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "DFS",
            "BFS"
        ],
        "data_structures": [
            "Matrix"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(m * n)",
        "description": "You are given a 0-indexed 2D matrix grid of size m x n, where (r, c) represents the number of fish in that water cell (0 means land). A fisher can catch all fish in a connected component of water cells. Return the maximum number of fish the fisher can catch.",
        "constraints": "m == grid.length\nn == grid[i].length\n1 <= m, n <= 10\n0 <= grid[i][j] <= 10",
        "input_format": "vector<vector<int>>& grid",
        "output_format": "int",
        "examples": [
            {
                "input": "grid = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]]",
                "output": "7",
                "explanation": "For the given input grid = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]], the expected output is 7."
            },
            {
                "input": "grid = [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]]",
                "output": "1",
                "explanation": "For the given input grid = [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Number of Fish in a Grid.",
        "execution_config": {
            "functionName": "findMaxFish",
            "returnType": "int",
            "parameters": [
                {
                    "name": "grid",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "cba076bf-7745-477f-aa01-6bca8dd53eca",
        "title": "Find Eventual Safe States Count",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "Topological Sort",
            "DFS"
        ],
        "data_structures": [
            "Graph",
            "Array"
        ],
        "expected_time": "O(v + e)",
        "expected_space": "O(v)",
        "description": "There is a directed graph of n nodes. A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node. Return the number of safe nodes in the graph.",
        "constraints": "n == graph.length\n1 <= n <= 10^4\n0 <= graph[i].length <= n",
        "input_format": "vector<vector<int>>& graph",
        "output_format": "int",
        "examples": [
            {
                "input": "graph = [[1,2],[2,3],[5],[0],[5],[],[]]",
                "output": "4",
                "explanation": "For the given input graph = [[1,2],[2,3],[5],[0],[5],[],[]], the expected output is 4."
            },
            {
                "input": "graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]]",
                "output": "1",
                "explanation": "For the given input graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Find Eventual Safe States Count.",
        "execution_config": {
            "functionName": "eventualSafeNodesCount",
            "returnType": "int",
            "parameters": [
                {
                    "name": "graph",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "c681cc3e-2bd8-4ca4-a33b-0b5ef15996d1",
        "title": "Adjacency List Node Count",
        "topic": "Graphs",
        "difficulty": "Easy",
        "patterns": [
            "Graph"
        ],
        "data_structures": [
            "Graph",
            "Array"
        ],
        "expected_time": "O(v)",
        "expected_space": "O(1)",
        "description": "Given the adjacency list of a connected graph, return the number of nodes in the graph.",
        "constraints": "0 <= adjList.length <= 100",
        "input_format": "vector<vector<int>>& adjList",
        "output_format": "int",
        "examples": [
            {
                "input": "adjList = [[2,4],[1,3],[2,4],[1,3]]",
                "output": "4",
                "explanation": "For the given input adjList = [[2,4],[1,3],[2,4],[1,3]], the expected output is 4."
            },
            {
                "input": "adjList = [[]]",
                "output": "1",
                "explanation": "For the given input adjList = [[]], the expected output is 1."
            },
            {
                "input": "adjList = []",
                "output": "0",
                "explanation": "For the given input adjList = [], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Adjacency List Node Count.",
        "execution_config": {
            "functionName": "nodeCount",
            "returnType": "int",
            "parameters": [
                {
                    "name": "adjList",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "6af3ef3d-3858-45d0-a29c-6f2a8654b13f",
        "title": "Number of Closed Islands",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "DFS",
            "BFS"
        ],
        "data_structures": [
            "Matrix"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(m * n)",
        "description": "Given a 2D grid consists of 0s (land) and 1s (water). An island is a maximal 4-directionally connected group of 0s and a closed island is totally surrounded by 1s (not touching border). Return the number of closed islands.",
        "constraints": "1 <= grid.length, grid[0].length <= 100\n0 <= grid[i][j] <= 1",
        "input_format": "vector<vector<int>>& grid",
        "output_format": "int",
        "examples": [
            {
                "input": "grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]",
                "output": "2",
                "explanation": "For the given input grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]], the expected output is 2."
            },
            {
                "input": "grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]",
                "output": "1",
                "explanation": "For the given input grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Number of Closed Islands.",
        "execution_config": {
            "functionName": "closedIsland",
            "returnType": "int",
            "parameters": [
                {
                    "name": "grid",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "524399d2-e36a-4665-a9a7-ba7738297d6e",
        "title": "Number of Enclaves",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "DFS",
            "BFS"
        ],
        "data_structures": [
            "Matrix"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(m * n)",
        "description": "You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell. A move consists of walking from one land cell to an adjacent land cell or walking off the boundary. Return the number of land cells in grid for which we cannot walk off the boundary.",
        "constraints": "m == grid.length\nn == grid[i].length\n1 <= m, n <= 500\ngrid[i][j] is 0 or 1.",
        "input_format": "vector<vector<int>>& grid",
        "output_format": "int",
        "examples": [
            {
                "input": "grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]",
                "output": "3",
                "explanation": "For the given input grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]], the expected output is 3."
            },
            {
                "input": "grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]",
                "output": "0",
                "explanation": "For the given input grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Number of Enclaves.",
        "execution_config": {
            "functionName": "numEnclaves",
            "returnType": "int",
            "parameters": [
                {
                    "name": "grid",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "198ac6ee-5c9b-48a9-ab73-a3f0f0d59970",
        "title": "Count Sub Islands",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "DFS"
        ],
        "data_structures": [
            "Matrix"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(m * n)",
        "description": "You are given two m x n binary matrices grid1 and grid2 containing only 0's (representing water) and 1's (representing land). An island in grid2 is a sub-island if every island cell in grid2 is also land in grid1. Return the number of sub-islands in grid2.",
        "constraints": "m == grid1.length == grid2.length\nn == grid1[i].length == grid2[i].length\n1 <= m, n <= 500\ngrid1[i][j] and grid2[i][j] are either 0 or 1.",
        "input_format": "vector<vector<int>>& grid1, vector<vector<int>>& grid2",
        "output_format": "int",
        "examples": [
            {
                "input": "grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]",
                "output": "3",
                "explanation": "For the given input grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]], the expected output is 3."
            },
            {
                "input": "grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]",
                "output": "2",
                "explanation": "For the given input grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]], the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Count Sub Islands.",
        "execution_config": {
            "functionName": "countSubIslands",
            "returnType": "int",
            "parameters": [
                {
                    "name": "grid1",
                    "type": "vector<vector<int>>&"
                },
                {
                    "name": "grid2",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "9b2542f1-3b32-460b-a1c7-a204ef36abbc",
        "title": "Surrounded Regions O to X Count",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "DFS",
            "BFS"
        ],
        "data_structures": [
            "Matrix"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(m * n)",
        "description": "Given an m x n matrix board containing 'X' (1) and 'O' (0), capture all regions that are 4-directionally surrounded by 'X'. Return the count of captured 'O' cells converted to 'X'.",
        "constraints": "m == board.length\nn == board[i].length\n1 <= m, n <= 200",
        "input_format": "vector<vector<int>>& board",
        "output_format": "int",
        "examples": [
            {
                "input": "board = [[1,1,1,1],[1,0,0,1],[1,1,0,1],[1,0,1,1]]",
                "output": "3",
                "explanation": "For the given input board = [[1,1,1,1],[1,0,0,1],[1,1,0,1],[1,0,1,1]], the expected output is 3."
            },
            {
                "input": "board = [[1]]",
                "output": "0",
                "explanation": "For the given input board = [[1]], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Surrounded Regions O to X Count.",
        "execution_config": {
            "functionName": "capturedRegionsCount",
            "returnType": "int",
            "parameters": [
                {
                    "name": "board",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "b4262188-a34f-4b4e-afad-7074ffb791ff",
        "title": "Maximum Star Sum of a Graph",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "Greedy",
            "Graph"
        ],
        "data_structures": [
            "Graph",
            "Array"
        ],
        "expected_time": "O(n + e log k)",
        "expected_space": "O(n + e)",
        "description": "There is an undirected graph consisting of n nodes with values in vals. A star graph with center node center and at most k edges has star sum equal to vals[center] + sum of the values of up to k chosen neighbors. Return the maximum star sum of graph.",
        "constraints": "n == vals.length\n1 <= n <= 10^5\n-10^4 <= vals[i] <= 10^4\n0 <= edges.length <= min(n * (n - 1) / 2, 10^5)\n0 <= k <= n - 1",
        "input_format": "vector<int>& vals, vector<vector<int>>& edges, int k",
        "output_format": "int",
        "examples": [
            {
                "input": "vals = [1,2,3,4,10,-10,-20], edges = [[0,1],[1,2],[1,3],[3,4],[3,5],[3,6]], k = 2",
                "output": "16",
                "explanation": "For the given input vals = [1,2,3,4,10,-10,-20], edges = [[0,1],[1,2],[1,3],[3,4],[3,5],[3,6]], k = 2, the expected output is 16."
            },
            {
                "input": "vals = [-5], edges = [], k = 0",
                "output": "-5",
                "explanation": "For the given input vals = [-5], edges = [], k = 0, the expected output is -5."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Star Sum of a Graph.",
        "execution_config": {
            "functionName": "maxStarSum",
            "returnType": "int",
            "parameters": [
                {
                    "name": "vals",
                    "type": "vector<int>&"
                },
                {
                    "name": "edges",
                    "type": "vector<vector<int>>&"
                },
                {
                    "name": "k",
                    "type": "int"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "cf7796f0-426e-4d09-a4fb-b32c5e024a84",
        "title": "Course Schedule II First Course",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "Topological Sort"
        ],
        "data_structures": [
            "Graph",
            "Array"
        ],
        "expected_time": "O(v + e)",
        "expected_space": "O(v + e)",
        "description": "Given numCourses and prerequisites, return the first course you should take in a valid course ordering. If no ordering is possible, return -1.",
        "constraints": "1 <= numCourses <= 2000",
        "input_format": "int numCourses, vector<vector<int>>& prerequisites",
        "output_format": "int",
        "examples": [
            {
                "input": "numCourses = 2, prerequisites = [[1,0]]",
                "output": "0",
                "explanation": "For the given input numCourses = 2, prerequisites = [[1,0]], the expected output is 0."
            },
            {
                "input": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
                "output": "0",
                "explanation": "For the given input numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]], the expected output is 0."
            },
            {
                "input": "numCourses = 2, prerequisites = [[1,0],[0,1]]",
                "output": "-1",
                "explanation": "For the given input numCourses = 2, prerequisites = [[1,0],[0,1]], the expected output is -1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Course Schedule II First Course.",
        "execution_config": {
            "functionName": "findFirstCourse",
            "returnType": "int",
            "parameters": [
                {
                    "name": "numCourses",
                    "type": "int"
                },
                {
                    "name": "prerequisites",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "53ab3e1a-fd11-43df-a4b6-5c8a5b78143a",
        "title": "Minimum Cost to Connect All Points MST",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "Minimum Spanning Tree",
            "Greedy"
        ],
        "data_structures": [
            "Graph",
            "Disjoint Set"
        ],
        "expected_time": "O(n^2)",
        "expected_space": "O(n)",
        "description": "You are given an array points representing integer coordinates of some points on a 2D-plane. The cost of connecting two points is the Manhattan distance between them: |xi - xj| + |yi - yj|. Return the minimum cost to make all points connected.",
        "constraints": "1 <= points.length <= 1000\n-10^6 <= xi, yi <= 10^6",
        "input_format": "vector<vector<int>>& points",
        "output_format": "int",
        "examples": [
            {
                "input": "points = [[0,0],[2,2],[3,10],[5,2],[7,0]]",
                "output": "20",
                "explanation": "For the given input points = [[0,0],[2,2],[3,10],[5,2],[7,0]], the expected output is 20."
            },
            {
                "input": "points = [[3,12],[-2,5],[-4,1]]",
                "output": "18",
                "explanation": "For the given input points = [[3,12],[-2,5],[-4,1]], the expected output is 18."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Cost to Connect All Points MST.",
        "execution_config": {
            "functionName": "minCostConnectPoints",
            "returnType": "int",
            "parameters": [
                {
                    "name": "points",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "c924fa74-f6cc-4302-ad47-b01cc1f48431",
        "title": "Pacific Atlantic Water Flow Cells Count",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "DFS",
            "BFS"
        ],
        "data_structures": [
            "Matrix"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(m * n)",
        "description": "There is an m x n rectangular island that borders both the Pacific Ocean (top and left edges) and Atlantic Ocean (bottom and right edges). Water can flow from a cell to adjacent cells of equal or lower height. Return the number of grid coordinates from which water can flow to both the Pacific and Atlantic oceans.",
        "constraints": "m == heights.length\nn == heights[r].length\n1 <= m, n <= 200\n0 <= heights[r][c] <= 10^5",
        "input_format": "vector<vector<int>>& heights",
        "output_format": "int",
        "examples": [
            {
                "input": "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
                "output": "7",
                "explanation": "For the given input heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]], the expected output is 7."
            },
            {
                "input": "heights = [[1]]",
                "output": "1",
                "explanation": "For the given input heights = [[1]], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Pacific Atlantic Water Flow Cells Count.",
        "execution_config": {
            "functionName": "pacificAtlanticCount",
            "returnType": "int",
            "parameters": [
                {
                    "name": "heights",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "9cb01d7b-f500-4c64-ab5a-22c0edfb0a08",
        "title": "Shortest Bridge Between Two Islands",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "BFS",
            "DFS"
        ],
        "data_structures": [
            "Matrix",
            "Queue"
        ],
        "expected_time": "O(n^2)",
        "expected_space": "O(n^2)",
        "description": "You are given an n x n binary matrix grid where 1 represents land and 0 represents water. An island is a 4-directionally connected group of 1's. There are exactly two islands in grid. Return the smallest number of 0's you must flip to connect the two islands.",
        "constraints": "n == grid.length == grid[i].length\n2 <= n <= 100\ngrid[i][j] is either 0 or 1.\nThere are exactly two islands in grid.",
        "input_format": "vector<vector<int>>& grid",
        "output_format": "int",
        "examples": [
            {
                "input": "grid = [[0,1],[1,0]]",
                "output": "1",
                "explanation": "For the given input grid = [[0,1],[1,0]], the expected output is 1."
            },
            {
                "input": "grid = [[0,1,0],[0,0,0],[0,0,1]]",
                "output": "2",
                "explanation": "For the given input grid = [[0,1,0],[0,0,0],[0,0,1]], the expected output is 2."
            },
            {
                "input": "grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]",
                "output": "1",
                "explanation": "For the given input grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]], the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Shortest Bridge Between Two Islands.",
        "execution_config": {
            "functionName": "shortestBridge",
            "returnType": "int",
            "parameters": [
                {
                    "name": "grid",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "ac93a459-2abb-42aa-a9df-f1c6b743bdfb",
        "title": "01 Matrix Nearest 0 Distance Sum",
        "topic": "Graphs",
        "difficulty": "Medium",
        "patterns": [
            "BFS"
        ],
        "data_structures": [
            "Matrix",
            "Queue"
        ],
        "expected_time": "O(m * n)",
        "expected_space": "O(m * n)",
        "description": "Given an m x n binary matrix mat, find the distance of the nearest 0 for each cell. Return the sum of all distances across the entire matrix.",
        "constraints": "m == mat.length\nn == mat[i].length\n1 <= m, n <= 10^4\n1 <= m * n <= 10^4\nmat[i][j] is either 0 or 1.\nThere is at least one 0 in mat.",
        "input_format": "vector<vector<int>>& mat",
        "output_format": "int",
        "examples": [
            {
                "input": "mat = [[0,0,0],[0,1,0],[0,0,0]]",
                "output": "1",
                "explanation": "For the given input mat = [[0,0,0],[0,1,0],[0,0,0]], the expected output is 1."
            },
            {
                "input": "mat = [[0,0,0],[0,1,0],[1,1,1]]",
                "output": "5",
                "explanation": "For the given input mat = [[0,0,0],[0,1,0],[1,1,1]], the expected output is 5."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for 01 Matrix Nearest 0 Distance Sum.",
        "execution_config": {
            "functionName": "matrixDistanceSum",
            "returnType": "int",
            "parameters": [
                {
                    "name": "mat",
                    "type": "vector<vector<int>>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "95738461-cc63-4f02-ac26-b8e15a1b0231",
        "title": "Word Ladder Transformation Length",
        "topic": "Graphs",
        "difficulty": "Hard",
        "patterns": [
            "BFS"
        ],
        "data_structures": [
            "Graph",
            "Queue",
            "Hash Set"
        ],
        "expected_time": "O(n * l^2)",
        "expected_space": "O(n * l)",
        "description": "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that every adjacent pair differs by a single letter. Return the number of words in the shortest transformation sequence, or 0 if no such sequence exists.",
        "constraints": "1 <= beginWord.length <= 10\nendWord.length == beginWord.length\n1 <= wordList.length <= 5000\nwordList[i].length == beginWord.length\nAll strings consist of lowercase English letters.\nbeginWord != endWord\nAll strings in wordList are unique.",
        "input_format": "string beginWord, string endWord, vector<string>& wordList",
        "output_format": "int",
        "examples": [
            {
                "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
                "output": "5",
                "explanation": "For the given input beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"], the expected output is 5."
            },
            {
                "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
                "output": "0",
                "explanation": "For the given input beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Word Ladder Transformation Length.",
        "execution_config": {
            "functionName": "ladderLength",
            "returnType": "int",
            "parameters": [
                {
                    "name": "beginWord",
                    "type": "string"
                },
                {
                    "name": "endWord",
                    "type": "string"
                },
                {
                    "name": "wordList",
                    "type": "vector<string>&"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    }
];

export default GRAPH_PROBLEMS;
