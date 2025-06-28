function FindProxyForURL(url, host)
{
    if (shExpMatch(host, "*googlevideo.com*") ||
shExpMatch(host, "*googlevideo.com") ||
shExpMatch(host, "*ggpht.com*") ||
shExpMatch(host, "*ytimg.com*") ||
shExpMatch(host, "*youtube.com*") ||
shExpMatch(host, "*youtubekids.com*") ||
shExpMatch(host, "*play.google.com*") ||
shExpMatch(host, "*youtu.be*") ||
shExpMatch(host, "*googleapis.com*") ||
shExpMatch(host, "*googleusercontent.com*") ||
shExpMatch(host, "*gstatic.com*") ||
shExpMatch(host, "*l.google.com*") ||
shExpMatch(host, "*openwrt.org*") ||
shExpMatch(host, "googlevideo.com") ||
shExpMatch(host, "googlevideo.com") ||
shExpMatch(host, "googlevideo.com") ||
shExpMatch(host, "googlevideo.com") ||
shExpMatch(host, "googlevideo.com") ||
shExpMatch(host, "googlevideo.com") ||
shExpMatch(host, "googlevideo.com") ||
shExpMatch(host, "googlevideo.com") ||
shExpMatch(host, "googlevideo.com") ||
shExpMatch(host, "googlevideo.com") ||
shExpMatch(host, "googlevideo.com") ||
shExpMatch(host, "googlevideo.com") ||
shExpMatch(host, "googlevideo.com"))
        return "PROXY 127.0.0.1:18080";
    else
    	return "DIRECT";
}
