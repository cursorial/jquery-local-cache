(function ($) {
	    var localCache = {
		            data: {},
		            get: function(url) {
				                return localCache.data[url];
				            },
		            set: function(url, cachedData, callback) {
				                localCache.remove(url);
				                localCache.data[url] = cachedData;
				                if($.isFunction(callback)) {
							                callback(cachedData);
							            }
				            },
		            remove: function(url) {
				                delete localCache.data[url];
				            },
		            exists: function(url) {
				                return localCache.data.hasOwnProperty(url) && localCache.data[url] !== null;
				            }
		        };

	    $.fn.localCache = function(action, url, options) {
		            if(action === 'get') {
				                localCache.get(url);
				            }
		            if(action === 'set') {
				                localCache.set(url, options.data, options.callback);
				            }
		            if(action === 'remove') {
				                localCache.remove(url);
				            }
		            if(action === 'exists') {
				                localCache.exists(url);
				            }
		        }
})
