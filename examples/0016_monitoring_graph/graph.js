var graph = function graph(data, computation) {
    data = null;  // Needed to appease JSHint.
    var result = [];
    result.push({
        'label': 'sleepproblemns',
        'max': 30,
        'value': computation.sleep
    });
    return result;
};
