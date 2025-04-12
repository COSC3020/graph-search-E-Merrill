function depthFirstSearch(graph, startNode, targetNode, path, visited = new Set()) {
    if (startNode == targetNode){
        path.push(startNode);
        return true;
    }
    visited.add(startNode);
    for (let j = 0; j < graph[startNode].length; j++){
        if(graph[startNode][j]){
            if(visited.has(j)){
                continue;
            }
            if(depthFirstSearch(graph, j, targetNode, path, visited)) {
                path.push(startNode);
                return true;
            }
        }
    }
    return false;
}

function search(graph, startNode, targetNode){
    if(graph.length == 0){
        return [];
    }
    let path = [];
    if(depthFirstSearch(graph, startNode, targetNode, path)){
        
        //reversed because pushing things to an array puts it at the end, and we add the path
        //as we 'go back' from finished recursive calls

        path.reverse();
        return path;
    }
    else{return []};
}
