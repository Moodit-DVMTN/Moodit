var colors = ["#46a4cc", "#50a39e", "#a63e4b", "#e3aa59", "#a63ba0"]

for (i=0; i<5; i++) {
TweenMax.to("#start"+i, 1, {
  morphSVG:"#end"+i, 
  fill:colors[i], 
  yoyo:true, 
  repeat:-1, 
  repeatDelay: 1, 
  ease:Power2.easeInOut});
}

<svg id="morphLoop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200">
  <title>morphLoop</title>
  <rect id="background" width="1000" height="200" fill="#1a1a1a"/>
  <g id="endPaths">
    <path id="end0" d="M175,175H25V25H175V175Z" />
    <path id="end1" d="M300,25l86.6,150H213.4Z" />
    <path id="end2" d="M500,23.92L524.72,74,580,82l-40,39,9.44,55.05-49.44-26-49.44,26L460,121,420,82l55.28-8Z" />
    <path id="end3" d="M700,27.26l48.21,17.55,25.65,44.43L765,139.76l-39.3,33h-51.3l-39.3-33-8.91-50.52,25.65-44.43Z" />
    <path id="end4" d="M961.33,130l-22,4.23-1.17,22.42-21.21-7.36-12.22,18.83-14.69-17-20,10.2-4.23-22-22.42-1.17,7.36-21.21-18.83-12.22,17-14.69-10.2-20,22-4.23,1.17-22.42,21.21,7.36,12.22-18.83,14.69,17,20-10.2,4.23,22,22.42,1.17-7.36,21.21,18.83,12.22-17,14.69Z" />
  </g>
  <g id="startPaths">
    <path id="start0" d="M175,100a75,75,0,1,1-75-75A75,75,0,0,1,175,100Z" />
    <path id="start1" d="M375,100a75,75,0,1,1-75-75A75,75,0,0,1,375,100Z" />
    <path id="start2" d="M575,100a75,75,0,1,1-75-75A75,75,0,0,1,575,100Z" />
    <path id="start3" d="M775,100a75,75,0,1,1-75-75A75,75,0,0,1,775,100Z" />
    <path id="start4" d="M975,100a75,75,0,1,1-75-75A75,75,0,0,1,975,100Z" />
  </g>
</svg>