function FindProxyForURL(url, host)
{
    if (shExpMatch(host, "*.facebook.com") || 
    	shExpMatch(host, "facebook.com") ||
    	shExpMatch(host, "static.ak.fbcdn.net"))
        return "PROXY 127.0.0.1:9666";
    else
    	return "DIRECT";
}