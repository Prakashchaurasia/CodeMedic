/**
 * Greedy Problems Dataset (20 problems)
 * CodeMedic Verified DSA Collection
 */

export const GREEDY_PROBLEMS = [
    {
        "id": "390e99d2-22b0-466d-a614-888453f368b2",
        "title": "Gas Station Circular Tour Starting Index",
        "topic": "Greedy",
        "difficulty": "Medium",
        "patterns": [
            "Greedy"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i]. You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.",
        "constraints": "n == gas.length == cost.length\n1 <= n <= 10^5\n0 <= gas[i], cost[i] <= 10^4",
        "input_format": "vector<int>& gas, vector<int>& cost",
        "output_format": "int",
        "examples": [
            {
                "input": "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
                "output": "3",
                "explanation": "For the given input gas = [1,2,3,4,5], cost = [3,4,5,1,2], the expected output is 3."
            },
            {
                "input": "gas = [2,3,4], cost = [3,4,3]",
                "output": "-1",
                "explanation": "For the given input gas = [2,3,4], cost = [3,4,3], the expected output is -1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Gas Station Circular Tour Starting Index.",
        "execution_config": {
            "functionName": "canCompleteCircuit",
            "returnType": "int",
            "parameters": [
                {
                    "name": "gas",
                    "type": "vector<int>&"
                },
                {
                    "name": "cost",
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
        "id": "6e639cdc-dcea-4ab2-a664-5463108bd343",
        "title": "Candy Distribution Minimum Total",
        "topic": "Greedy",
        "difficulty": "Hard",
        "patterns": [
            "Greedy"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings. Each child must have at least one candy. Children with a higher rating get more candies than their neighbors. Return the minimum number of candies you need to have to distribute the candies to the children.",
        "constraints": "n == ratings.length\n1 <= n <= 2 * 10^4\n0 <= ratings[i] <= 2 * 10^4",
        "input_format": "vector<int>& ratings",
        "output_format": "int",
        "examples": [
            {
                "input": "ratings = [1,0,2]",
                "output": "5",
                "explanation": "For the given input ratings = [1,0,2], the expected output is 5."
            },
            {
                "input": "ratings = [1,2,2]",
                "output": "4",
                "explanation": "For the given input ratings = [1,2,2], the expected output is 4."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Candy Distribution Minimum Total.",
        "execution_config": {
            "functionName": "candy",
            "returnType": "int",
            "parameters": [
                {
                    "name": "ratings",
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
        "id": "97b1edb3-c7fc-4de5-a8a9-6465bdd55786",
        "title": "Non-overlapping Intervals Minimum Removals",
        "topic": "Greedy",
        "difficulty": "Medium",
        "patterns": [
            "Greedy",
            "Sorting"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(1)",
        "description": "Given an array of intervals intervals where intervals[i] = [start_i, end_i], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
        "constraints": "1 <= intervals.length <= 10^5\nintervals[i].length == 2\n-5 * 10^4 <= start_i < end_i <= 5 * 10^4",
        "input_format": "vector<vector<int>>& intervals",
        "output_format": "int",
        "examples": [
            {
                "input": "intervals = [[1,2],[2,3],[3,4],[1,3]]",
                "output": "1",
                "explanation": "For the given input intervals = [[1,2],[2,3],[3,4],[1,3]], the expected output is 1."
            },
            {
                "input": "intervals = [[1,2],[1,2],[1,2]]",
                "output": "2",
                "explanation": "For the given input intervals = [[1,2],[1,2],[1,2]], the expected output is 2."
            },
            {
                "input": "intervals = [[1,2],[2,3]]",
                "output": "0",
                "explanation": "For the given input intervals = [[1,2],[2,3]], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Non-overlapping Intervals Minimum Removals.",
        "execution_config": {
            "functionName": "eraseOverlapIntervals",
            "returnType": "int",
            "parameters": [
                {
                    "name": "intervals",
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
        "id": "75af43c0-679e-49b8-ad78-ae468dbbc768",
        "title": "Minimum Arrows to Burst Balloons",
        "topic": "Greedy",
        "difficulty": "Medium",
        "patterns": [
            "Greedy",
            "Sorting"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(1)",
        "description": "There are spherical balloons taped to a flat wall. The balloons are represented by a 2D integer array points where points[i] = [x_start, x_end]. An arrow shot perpendicularly upward bursts any balloon whose range contains x. Return the minimum number of arrows that must be shot to burst all balloons.",
        "constraints": "1 <= points.length <= 10^5\npoints[i].length == 2\n-2^31 <= x_start < x_end <= 2^31 - 1",
        "input_format": "vector<vector<int>>& points",
        "output_format": "int",
        "examples": [
            {
                "input": "points = [[10,16],[2,8],[1,6],[7,12]]",
                "output": "2",
                "explanation": "For the given input points = [[10,16],[2,8],[1,6],[7,12]], the expected output is 2."
            },
            {
                "input": "points = [[1,2],[3,4],[5,6],[7,8]]",
                "output": "4",
                "explanation": "For the given input points = [[1,2],[3,4],[5,6],[7,8]], the expected output is 4."
            },
            {
                "input": "points = [[1,2],[2,3],[3,4],[4,5]]",
                "output": "2",
                "explanation": "For the given input points = [[1,2],[2,3],[3,4],[4,5]], the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Arrows to Burst Balloons.",
        "execution_config": {
            "functionName": "findMinArrowShots",
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
        "id": "d7538b06-c770-43ec-ab39-01c26603a895",
        "title": "Lemonade Change Correct Change Possible",
        "topic": "Greedy",
        "difficulty": "Easy",
        "patterns": [
            "Greedy"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "At a lemonade stand, each lemonade costs $5. Customers stand in a queue to buy from you and order one at a time. Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer. Return true if you can provide every customer with correct change.",
        "constraints": "1 <= bills.length <= 10^5\nbills[i] is either 5, 10, or 20.",
        "input_format": "vector<int>& bills",
        "output_format": "bool",
        "examples": [
            {
                "input": "bills = [5,5,5,10,20]",
                "output": "true",
                "explanation": "For the given input bills = [5,5,5,10,20], the expected output is true."
            },
            {
                "input": "bills = [5,5,10,10,20]",
                "output": "false",
                "explanation": "For the given input bills = [5,5,10,10,20], the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Lemonade Change Correct Change Possible.",
        "execution_config": {
            "functionName": "lemonadeChange",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "bills",
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
        "id": "1fac88ba-1569-4e2f-ac41-5dcb9900f973",
        "title": "Maximum Units on a Truck",
        "topic": "Greedy",
        "difficulty": "Easy",
        "patterns": [
            "Greedy",
            "Sorting"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(1)",
        "description": "You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxes_i, numberOfUnitsPerBox_i]. You are also given an integer truckSize. Return the maximum total number of units that can be put on the truck.",
        "constraints": "1 <= boxTypes.length <= 1000\n1 <= numberOfBoxes_i, numberOfUnitsPerBox_i <= 1000\n1 <= truckSize <= 10^6",
        "input_format": "vector<vector<int>>& boxTypes, int truckSize",
        "output_format": "int",
        "examples": [
            {
                "input": "boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4",
                "output": "8",
                "explanation": "For the given input boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4, the expected output is 8."
            },
            {
                "input": "boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10",
                "output": "91",
                "explanation": "For the given input boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10, the expected output is 91."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Units on a Truck.",
        "execution_config": {
            "functionName": "maximumUnits",
            "returnType": "int",
            "parameters": [
                {
                    "name": "boxTypes",
                    "type": "vector<vector<int>>&"
                },
                {
                    "name": "truckSize",
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
        "id": "33bcef8b-a911-42b9-a2d1-41881e94fec5",
        "title": "Maximum Swap Single Digit",
        "topic": "Greedy",
        "difficulty": "Medium",
        "patterns": [
            "Greedy"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(d)",
        "expected_space": "O(d)",
        "description": "You are given an integer num. You can swap two digits at most once to get the maximum valued number. Return the maximum valued number you can get.",
        "constraints": "0 <= num <= 10^8",
        "input_format": "int num",
        "output_format": "int",
        "examples": [
            {
                "input": "num = 2736",
                "output": "7236",
                "explanation": "For the given input num = 2736, the expected output is 7236."
            },
            {
                "input": "num = 9973",
                "output": "9973",
                "explanation": "For the given input num = 9973, the expected output is 9973."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum Swap Single Digit.",
        "execution_config": {
            "functionName": "maximumSwap",
            "returnType": "int",
            "parameters": [
                {
                    "name": "num",
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
        "id": "604dc7ea-6ef0-45c0-a96e-e38bcde9cf32",
        "title": "Two City Scheduling Minimum Cost",
        "topic": "Greedy",
        "difficulty": "Medium",
        "patterns": [
            "Greedy",
            "Sorting"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(1)",
        "description": "A company is planning to interview 2n people. Given the array costs where costs[i] = [aCost_i, bCost_i], the cost of flying the ith person to city A is aCost_i, and to city B is bCost_i. Return the minimum cost to fly exactly n people to city A, and n people to city B.",
        "constraints": "2 * n == costs.length\n2 <= costs.length <= 100\ncosts.length is even.\n1 <= aCost_i, bCost_i <= 1000",
        "input_format": "vector<vector<int>>& costs",
        "output_format": "int",
        "examples": [
            {
                "input": "costs = [[10,20],[30,200],[400,50],[30,20]]",
                "output": "110",
                "explanation": "For the given input costs = [[10,20],[30,200],[400,50],[30,20]], the expected output is 110."
            },
            {
                "input": "costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]",
                "output": "1859",
                "explanation": "For the given input costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]], the expected output is 1859."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Two City Scheduling Minimum Cost.",
        "execution_config": {
            "functionName": "twoCitySchedCost",
            "returnType": "int",
            "parameters": [
                {
                    "name": "costs",
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
        "id": "862cd1a5-8300-48ae-a784-09ecf8d4331d",
        "title": "Buy and Sell Stock II Multi-Transaction",
        "topic": "Greedy",
        "difficulty": "Medium",
        "patterns": [
            "Greedy"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You are given an integer array prices where prices[i] is the price of a given stock on the ith day. On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. Find and return the maximum profit you can achieve.",
        "constraints": "1 <= prices.length <= 3 * 10^4\n0 <= prices[i] <= 10^4",
        "input_format": "vector<int>& prices",
        "output_format": "int",
        "examples": [
            {
                "input": "prices = [7,1,5,3,6,4]",
                "output": "7",
                "explanation": "For the given input prices = [7,1,5,3,6,4], the expected output is 7."
            },
            {
                "input": "prices = [1,2,3,4,5]",
                "output": "4",
                "explanation": "For the given input prices = [1,2,3,4,5], the expected output is 4."
            },
            {
                "input": "prices = [7,6,4,3,1]",
                "output": "0",
                "explanation": "For the given input prices = [7,6,4,3,1], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Buy and Sell Stock II Multi-Transaction.",
        "execution_config": {
            "functionName": "maxProfit",
            "returnType": "int",
            "parameters": [
                {
                    "name": "prices",
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
        "id": "77e027aa-f71b-4459-a045-4fbd005b371f",
        "title": "Split a String in Balanced Strings",
        "topic": "Greedy",
        "difficulty": "Easy",
        "patterns": [
            "Greedy"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "Balanced strings are those that have an equal quantity of 'L' and 'R' characters. Given a balanced string s, split it into the maximum amount of balanced strings. Return the maximum number of balanced strings you can obtain.",
        "constraints": "2 <= s.length <= 1000\ns[i] is either 'L' or 'R'.\ns is a balanced string.",
        "input_format": "string s",
        "output_format": "int",
        "examples": [
            {
                "input": "s = \"RLRRLLRLRL\"",
                "output": "4",
                "explanation": "For the given input s = \"RLRRLLRLRL\", the expected output is 4."
            },
            {
                "input": "s = \"RLRRRLLRLL\"",
                "output": "2",
                "explanation": "For the given input s = \"RLRRRLLRLL\", the expected output is 2."
            },
            {
                "input": "s = \"LLLLRRRR\"",
                "output": "1",
                "explanation": "For the given input s = \"LLLLRRRR\", the expected output is 1."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Split a String in Balanced Strings.",
        "execution_config": {
            "functionName": "balancedStringSplit",
            "returnType": "int",
            "parameters": [
                {
                    "name": "s",
                    "type": "string"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    },
    {
        "id": "8a016823-b104-411d-aeea-00d56bd26169",
        "title": "Can Place Flowers Without Violating Rule",
        "topic": "Greedy",
        "difficulty": "Easy",
        "patterns": [
            "Greedy"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots. Given an integer array flowerbed containing 0's and 1's, and an integer n, return true if n new flowers can be planted without violating the no-adjacent-flowers rule.",
        "constraints": "1 <= flowerbed.length <= 2 * 10^4\nflowerbed[i] is 0 or 1.\nThere are no two adjacent flowers in flowerbed.\n0 <= n <= flowerbed.length",
        "input_format": "vector<int>& flowerbed, int n",
        "output_format": "bool",
        "examples": [
            {
                "input": "flowerbed = [1,0,0,0,1], n = 1",
                "output": "true",
                "explanation": "For the given input flowerbed = [1,0,0,0,1], n = 1, the expected output is true."
            },
            {
                "input": "flowerbed = [1,0,0,0,1], n = 2",
                "output": "false",
                "explanation": "For the given input flowerbed = [1,0,0,0,1], n = 2, the expected output is false."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Can Place Flowers Without Violating Rule.",
        "execution_config": {
            "functionName": "canPlaceFlowers",
            "returnType": "bool",
            "parameters": [
                {
                    "name": "flowerbed",
                    "type": "vector<int>&"
                },
                {
                    "name": "n",
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
        "id": "58be6244-e1e3-4cc2-acbf-3b3d99342057",
        "title": "Monotone Increasing Digits",
        "topic": "Greedy",
        "difficulty": "Medium",
        "patterns": [
            "Greedy"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(d)",
        "expected_space": "O(d)",
        "description": "An integer has monotone increasing digits if and only if each pair of adjacent digits x and y satisfy x <= y. Given an integer n, return the largest number that is less than or equal to n with monotone increasing digits.",
        "constraints": "0 <= n <= 10^9",
        "input_format": "int n",
        "output_format": "int",
        "examples": [
            {
                "input": "n = 10",
                "output": "9",
                "explanation": "For the given input n = 10, the expected output is 9."
            },
            {
                "input": "n = 1234",
                "output": "1234",
                "explanation": "For the given input n = 1234, the expected output is 1234."
            },
            {
                "input": "n = 332",
                "output": "299",
                "explanation": "For the given input n = 332, the expected output is 299."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Monotone Increasing Digits.",
        "execution_config": {
            "functionName": "monotoneIncreasingDigits",
            "returnType": "int",
            "parameters": [
                {
                    "name": "n",
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
        "id": "ec918a1a-c3df-4038-aef9-f111af69681d",
        "title": "Bag of Tokens Maximum Score",
        "topic": "Greedy",
        "difficulty": "Medium",
        "patterns": [
            "Two Pointers",
            "Greedy"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(1)",
        "description": "You start with an initial power of power, an initial score of 0, and a bag of tokens tokens where each tokens[i] is the value of token i. Play face up to lose token power and gain 1 score; play face down to lose 1 score and gain token power. Return the maximum possible score.",
        "constraints": "0 <= tokens.length <= 1000\n0 <= tokens[i], power < 10^4",
        "input_format": "vector<int>& tokens, int power",
        "output_format": "int",
        "examples": [
            {
                "input": "tokens = [100], power = 50",
                "output": "0",
                "explanation": "For the given input tokens = [100], power = 50, the expected output is 0."
            },
            {
                "input": "tokens = [200,100], power = 150",
                "output": "1",
                "explanation": "For the given input tokens = [200,100], power = 150, the expected output is 1."
            },
            {
                "input": "tokens = [100,200,300,400], power = 200",
                "output": "2",
                "explanation": "For the given input tokens = [100,200,300,400], power = 200, the expected output is 2."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Bag of Tokens Maximum Score.",
        "execution_config": {
            "functionName": "bagOfTokensScore",
            "returnType": "int",
            "parameters": [
                {
                    "name": "tokens",
                    "type": "vector<int>&"
                },
                {
                    "name": "power",
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
        "id": "5b323fa5-f405-4f15-acf8-ac9812636b56",
        "title": "Minimum Operations to Make Array Increasing",
        "topic": "Greedy",
        "difficulty": "Easy",
        "patterns": [
            "Greedy"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(1)",
        "description": "You are given an integer array nums (0-indexed). In one operation, you can choose an element of the array and increment it by 1. Return the minimum number of operations needed to make nums strictly increasing.",
        "constraints": "1 <= nums.length <= 5000\n1 <= nums[i] <= 10^4",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [1,1,1]",
                "output": "3",
                "explanation": "For the given input nums = [1,1,1], the expected output is 3."
            },
            {
                "input": "nums = [1,5,2,4,1]",
                "output": "14",
                "explanation": "For the given input nums = [1,5,2,4,1], the expected output is 14."
            },
            {
                "input": "nums = [8]",
                "output": "0",
                "explanation": "For the given input nums = [8], the expected output is 0."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Operations to Make Array Increasing.",
        "execution_config": {
            "functionName": "minOperations",
            "returnType": "int",
            "parameters": [
                {
                    "name": "nums",
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
        "id": "018a1550-b57d-4902-ad68-4e78f40f2b60",
        "title": "Max Element After Decreasing and Rearranging",
        "topic": "Greedy",
        "difficulty": "Medium",
        "patterns": [
            "Greedy",
            "Sorting"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(1)",
        "description": "You are given an array of positive integers arr. Perform operations such that: arr[0] == 1, and the absolute difference between any 2 adjacent elements is <= 1. Return the maximum possible value of an element in arr.",
        "constraints": "1 <= arr.length <= 10^5\n1 <= arr[i] <= 10^9",
        "input_format": "vector<int>& arr",
        "output_format": "int",
        "examples": [
            {
                "input": "arr = [2,2,1,2,1]",
                "output": "2",
                "explanation": "For the given input arr = [2,2,1,2,1], the expected output is 2."
            },
            {
                "input": "arr = [100,1,1000]",
                "output": "3",
                "explanation": "For the given input arr = [100,1,1000], the expected output is 3."
            },
            {
                "input": "arr = [1,2,3,4,5]",
                "output": "5",
                "explanation": "For the given input arr = [1,2,3,4,5], the expected output is 5."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Max Element After Decreasing and Rearranging.",
        "execution_config": {
            "functionName": "maximumElementAfterDecrementingAndRearranging",
            "returnType": "int",
            "parameters": [
                {
                    "name": "arr",
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
        "id": "cccac715-4343-4dc9-a2ee-ebed8bc9dade",
        "title": "Largest Perimeter Triangle",
        "topic": "Greedy",
        "difficulty": "Easy",
        "patterns": [
            "Greedy",
            "Sorting"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(1)",
        "description": "Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.",
        "constraints": "3 <= nums.length <= 10^4\n1 <= nums[i] <= 10^6",
        "input_format": "vector<int>& nums",
        "output_format": "int",
        "examples": [
            {
                "input": "nums = [2,1,2]",
                "output": "5",
                "explanation": "For the given input nums = [2,1,2], the expected output is 5."
            },
            {
                "input": "nums = [1,2,1]",
                "output": "0",
                "explanation": "For the given input nums = [1,2,1], the expected output is 0."
            },
            {
                "input": "nums = [3,6,2,3]",
                "output": "8",
                "explanation": "For the given input nums = [3,6,2,3], the expected output is 8."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Largest Perimeter Triangle.",
        "execution_config": {
            "functionName": "largestPerimeter",
            "returnType": "int",
            "parameters": [
                {
                    "name": "nums",
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
        "id": "d13a7c82-538b-4526-a06a-b3bf6e78d1c3",
        "title": "Minimum Subsequence in Non-Increasing Order",
        "topic": "Greedy",
        "difficulty": "Easy",
        "patterns": [
            "Greedy",
            "Sorting"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(n)",
        "description": "Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non-included elements. Return it in non-increasing order.",
        "constraints": "1 <= nums.length <= 500\n1 <= nums[i] <= 100",
        "input_format": "vector<int>& nums",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums = [4,3,10,9,8]",
                "output": "[10,9]",
                "explanation": "For the given input nums = [4,3,10,9,8], the expected output is [10,9]."
            },
            {
                "input": "nums = [4,4,7,6,7]",
                "output": "[7,7,6]",
                "explanation": "For the given input nums = [4,4,7,6,7], the expected output is [7,7,6]."
            },
            {
                "input": "nums = [6]",
                "output": "[6]",
                "explanation": "For the given input nums = [6], the expected output is [6]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Minimum Subsequence in Non-Increasing Order.",
        "execution_config": {
            "functionName": "minSubsequence",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "nums",
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
        "id": "963e8312-b1e3-498f-abb9-c0ddf404fa38",
        "title": "Maximum 69 Number",
        "topic": "Greedy",
        "difficulty": "Easy",
        "patterns": [
            "Greedy"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(d)",
        "expected_space": "O(d)",
        "description": "You are given a positive integer num consisting only of digits 6 and 9. Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).",
        "constraints": "1 <= num <= 10^4\nnum's digits are 6 or 9.",
        "input_format": "int num",
        "output_format": "int",
        "examples": [
            {
                "input": "num = 9669",
                "output": "9969",
                "explanation": "For the given input num = 9669, the expected output is 9969."
            },
            {
                "input": "num = 9996",
                "output": "9999",
                "explanation": "For the given input num = 9996, the expected output is 9999."
            },
            {
                "input": "num = 9999",
                "output": "9999",
                "explanation": "For the given input num = 9999, the expected output is 9999."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Maximum 69 Number.",
        "execution_config": {
            "functionName": "maximum69Number",
            "returnType": "int",
            "parameters": [
                {
                    "name": "num",
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
        "id": "0ef12688-493e-4cb9-a193-61029266f405",
        "title": "Advantage Shuffle Greediest Permutation",
        "topic": "Greedy",
        "difficulty": "Medium",
        "patterns": [
            "Greedy",
            "Two Pointers"
        ],
        "data_structures": [
            "Array"
        ],
        "expected_time": "O(n log n)",
        "expected_space": "O(n)",
        "description": "You are given two integer arrays nums1 and nums2 both of the same length. The advantage of nums1 with respect to nums2 is the number of indices i for which nums1[i] > nums2[i]. Return any permutation of nums1 that maximizes its advantage with respect to nums2.",
        "constraints": "1 <= nums1.length <= 10^5\nnums2.length == nums1.length\n0 <= nums1[i], nums2[i] <= 10^9",
        "input_format": "vector<int>& nums1, vector<int>& nums2",
        "output_format": "vector<int>",
        "examples": [
            {
                "input": "nums1 = [2,7,11,15], nums2 = [1,10,4,11]",
                "output": "[2,11,7,15]",
                "explanation": "For the given input nums1 = [2,7,11,15], nums2 = [1,10,4,11], the expected output is [2,11,7,15]."
            },
            {
                "input": "nums1 = [12,24,8,32], nums2 = [13,25,32,11]",
                "output": "[24,32,8,12]",
                "explanation": "For the given input nums1 = [12,24,8,32], nums2 = [13,25,32,11], the expected output is [24,32,8,12]."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Advantage Shuffle Greediest Permutation.",
        "execution_config": {
            "functionName": "advantageCount",
            "returnType": "vector<int>",
            "parameters": [
                {
                    "name": "nums1",
                    "type": "vector<int>&"
                },
                {
                    "name": "nums2",
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
        "id": "0ee55a88-bb62-4c00-afa5-c0528c0742e3",
        "title": "Break a Palindrome Lexicographically Smallest",
        "topic": "Greedy",
        "difficulty": "Medium",
        "patterns": [
            "Greedy"
        ],
        "data_structures": [
            "String"
        ],
        "expected_time": "O(n)",
        "expected_space": "O(n)",
        "description": "Given a palindromic string of lowercase English letters palindrome, replace exactly one character with any lowercase English letter so that the resulting string is not a palindrome and that it is the lexicographically smallest one possible. If impossible, return empty string \"\".",
        "constraints": "1 <= palindrome.length <= 1000\npalindrome consists of only lowercase English letters.",
        "input_format": "string palindrome",
        "output_format": "string",
        "examples": [
            {
                "input": "palindrome = \"abccba\"",
                "output": "\"aaccba\"",
                "explanation": "For the given input palindrome = \"abccba\", the expected output is \"aaccba\"."
            },
            {
                "input": "palindrome = \"a\"",
                "output": "\"\"",
                "explanation": "For the given input palindrome = \"a\", the expected output is \"\"."
            },
            {
                "input": "palindrome = \"aa\"",
                "output": "\"ab\"",
                "explanation": "For the given input palindrome = \"aa\", the expected output is \"ab\"."
            }
        ],
        "hints": [
            "Analyze the problem constraints and identify the target time complexity.",
            "Consider whether a greedy, two-pointer, or dynamic programming approach fits the substructure.",
            "Check for edge cases such as empty inputs, single elements, and boundary values."
        ],
        "learning_objective": "Master algorithmic problem solving for Break a Palindrome Lexicographically Smallest.",
        "execution_config": {
            "functionName": "breakPalindrome",
            "returnType": "string",
            "parameters": [
                {
                    "name": "palindrome",
                    "type": "string"
                }
            ],
            "comparisonType": "return_value"
        },
        "source": "CodeMedic Library",
        "is_generated": false,
        "generated_by": null
    }
];

export default GREEDY_PROBLEMS;
