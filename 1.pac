function FindProxyForURL(url, host)
{
    if (shExpMatch(host, "*youtube*") || 
    	shExpMatch(host, "facebook.com") ||
    	shExpMatch(host, "static.ak.fbcdn.net"))
        return "PROXY 127.0.0.1:18080";
    else
    	return "DIRECT";
}
