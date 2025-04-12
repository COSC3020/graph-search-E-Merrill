# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the start to the target (not
the list of nodes that you looked at during the search). If start and target are
the same, it should return a list with only that node. If there is no path from
the start to the target, it should return an empty list. Start with the template
I provided in `code.js` and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

**The worst case copmlexity of the search would end up being $\theta(|V| + |E|)$  where |V| is the number of verticies, and |E| is the number of edges. This is because in order to search, each vertex is visited, and then each edge is followed until eventually the connection to the target node is found. In the worst case, there is only one (or no) connection to the target node. This means we will have to search every edge of each vertex, and visit every single vertex until we reach the target, giving $(|V| + |E|)$**

## Bonus

Implement and analyze breadth-first search.
