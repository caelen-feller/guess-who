var limit = 1084;
const BLACKLIST = ["Image #97", "Image #138", "Image #148", "Image #333", "Image #86", "Image #245", "Image #224", "Image #105", "Image #205", "Image #246", "Image #394", "Image #150", "Image #262", "Image #226", "Image #207", "Image #332", "Image #1030", "Image #286", "Image #750", "Image #438", "Image #298", "Image #285", "Image #895", "Image #540", "Image #749", "Image #747", "Image #812", "Image #897", "Image #1034", "Image #1017", "Image #748", "Image #963", "Image #303", "Image #751", "Image #746", "Image #754", "Image #752", "Image #763", "Image #697", "Image #561", "Image #1046", "Image #762", "Image #759", "Image #761", "Image #753", "Image #968", "Image #771", "Image #414", "Image #597", "Image #714", "Image #624", "Image #792", "Image #462", "Image #463", "Image #587", "Image #636", "Image #801", "Image #850", "Image #745", "Image #854", "Image #934", "Image #595", "Image #632", "Image #644", "Image #647", "Image #899", "Image #489", "Image #711", "Image #720", "Image #713", "Image #712", "Image #843", "Image #917", "Image #920", "Image #346", "Image #589", "Image #956", "Image #673", "Image #422", "Image #359", "Image #706", "Image #578", "Image #734", "Image #592", "Image #1007", "Image #470", "Image #707", "Image #725", "Image #708", "Image #709", "Image #710", "Image #601"];

let data = [];

for(let i=0;i<=limit;i++) {
  let title = 'Image #' + i;
  if(BLACKLIST.indexOf(title) == -1) {
    data.push({
      'title': title,
      'image': 'https://i.picsum.photos/id/' + i + '/200/300.jpg',
      'url': 'https://i.picsum.photos/id/' + i + '/1024/1024.jpg'
    });
  }
}
