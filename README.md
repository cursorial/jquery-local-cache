# jquery-local-cache
## Why use this?
There are other caching solutions available that do similar things, however, they all use WebStorage only, this solution uses the heap, so you're not limited to only 5MB of storage. When you need large amounts of data to be readily available to the user on a Single Page Application, this is your best bet.

## How do I use it?
There are 5 functions currently available to you in this package.

### get
Get an entry from the cache.
```javascript
var cachedData = $(document).localCache('get', item);
```

### set
This creates an entry in the cache.
```javascript
function functionOnCompletion(data) {
	console.log(data);
}

var options = {
	data: ['data', 'to', 'store'],
	callback: functionOnCompletion
};

$(document).localCache('set', item, options);
```

### remove
Remove an entry from the cache.
```javascript
$(document).localCache('remove', item)
```

### exists
Returns a boolean value -- if the item exists returns `true`, else returns `false` 
```javascript
var itemDoesExist = $(document).localCache('exists', item);
```

### getAll
Returns a JSON object of all items in cache
```javascript
var allItemsInCache = $(document).localCache('getAll');
```
