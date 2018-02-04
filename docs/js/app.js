"use strict";function _toConsumableArray(a){if(Array.isArray(a)){for(var t=0,e=Array(a.length);t<a.length;t++)e[t]=a[t];return e}return Array.from(a)}riot.tag2("appbutton",'<button class="{opts.icon ? \'btn icon-button\' : \'btn\'}"><i if="{opts.icon}" class="icon {opts.icon}"></i>{opts.txt}</button>','appbutton .btn,[data-is="appbutton"] .btn{ color: #fff; background-color: #999; border: none; border-radius: .375rem; font-size: .875rem; padding: .75em 1em; } appbutton .icon-button,[data-is="appbutton"] .icon-button{ padding: .75em 1em .75em 2.5em; position: relative; } appbutton .icon,[data-is="appbutton"] .icon{ margin-right: .5em; font-size: 1.125rem; position: absolute; left: .5em; }',"",function(a){}),riot.tag2("appsubtitle",'<h2 class="subtitle">{opts.txt}</h2>','appsubtitle .subtitle,[data-is="appsubtitle"] .subtitle{ font-size: 1.75rem; }',"",function(a){}),riot.tag2("appvideo",'<div class="placeholder-video"><i class="far fa-play-circle icon"></i></div>','appvideo .placeholder-video,[data-is="appvideo"] .placeholder-video{ height: 0; padding-top: 55%; background-color: #555; border: 1px solid #fff; position: relative; transition: all 1s; } appvideo .placeholder-video:hover,[data-is="appvideo"] .placeholder-video:hover{ background-color: #333; box-shadow: 0 26px 16px -20px rgba(0,0,0,0.5); } appvideo .placeholder-video:hover > .icon,[data-is="appvideo"] .placeholder-video:hover > .icon{ color: #fff; } appvideo .icon,[data-is="appvideo"] .icon{ color: rgba(255,255,255,0.5); font-size: 4em; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); transition: color 1s; }',"",function(a){}),riot.tag2("cabody",'<div class="ca-body"> <main class="ca-primary"> <caplanner></caPlanner> <cacomments></caComments> </main> <div class="ca-secondary"> <casidebar></caSidebar> </div> </div>','cabody .ca-body,[data-is="cabody"] .ca-body{ padding: 2rem; } cabody .ca-primary,[data-is="cabody"] .ca-primary{ margin-bottom: 2rem; } @media screen and (min-width: 60em) { cabody .ca-primary,[data-is="cabody"] .ca-primary{ margin-bottom: unset; } @supports (display: grid) { cabody .ca-body,[data-is="cabody"] .ca-body{ display: grid; grid-template-columns: 2fr 1fr; grid-column-gap: 2rem; } cabody .ca-primary,[data-is="cabody"] .ca-primary{ grid-column: 1; } cabody .ca-secondary,[data-is="cabody"] .ca-secondary{ grid-column: 2; } } } @media screen and (min-width: 92em) { cabody .ca-body,[data-is="cabody"] .ca-body{ padding: 2rem calc(50% - 44em); } }',"",function(a){}),riot.tag2("cacomments",'<appsubtitle txt="Comments (20)"></appSubtitle> <div class="buttons"> <appbutton txt="Add New Comment" icon="fas fa-comment"></appButton> </div> <apptabheaders isclicked="{this.handleClick}" tabs="{this.tabs}"></appTabHeaders> <div class="outlined"> <apptabcontents tabs="{this.tabs}"></appTabContents> </div>','cacomments .buttons,[data-is="cacomments"] .buttons{ margin-bottom: 1rem; } cacomments .controls,[data-is="cacomments"] .controls{ display: flex; justify-content: space-between; margin-bottom: 1rem; } cacomments .comment,[data-is="cacomments"] .comment{ display: flex; align-items: center; color: #666; margin-bottom: 2rem; } cacomments .comment-image,[data-is="cacomments"] .comment-image{ flex: 0 0 3.5em; float: left; width: 3.5em; height: 3.5em; border-radius: 50%; background: #ccc; margin-right: 1em; } cacomments .comment-body,[data-is="cacomments"] .comment-body{ flex: 1 1 auto; } cacomments .username,[data-is="cacomments"] .username{ text-transform: uppercase; font-weight: 700; color: #333; } cacomments .likes,[data-is="cacomments"] .likes{ font-size: .875em; } cacomments .fa-thumbs-up,[data-is="cacomments"] .fa-thumbs-up{ font-size: 1.25em; } cacomments .date-published,[data-is="cacomments"] .date-published{ color: #aaa; font-size: .75rem; } cacomments .outlined,[data-is="cacomments"] .outlined{ border: 1px solid var(--border-color); border-top: none; padding: 1.25rem; } cacomments .input-wrapper,[data-is="cacomments"] .input-wrapper{ position: relative; } cacomments .input-field,[data-is="cacomments"] .input-field{ padding: .5em .5em .5em 2em; border: 1px solid var(--input-border-color); border-radius: 6px; font-size: .875rem; color: #999; -webkit-appearance: none; -moz-appearance: none; appearance: none; } cacomments .search-icon,[data-is="cacomments"] .search-icon{ color: #999; position: absolute; top: 0; left: 0.5em; transform: translateY(50%); }',"",function(a){var t=this;this.tabs=[{id:0,title:"Comments (1)",active:!0,content:"content/comments.html"},{id:1,title:"Private Notes (19)",content:"content/notes.html"}],this.handleClick=function(a){t.tabs.forEach(function(t){a.item.tab.id==t.id?t.active=!0:t.active=!1}),t.update()}}),riot.tag2("cafooter",'<footer> <div class="content">Footer content to come</div> </footer>','cafooter footer,[data-is="cafooter"] footer{ min-height: 300px; background: #333; } cafooter .content,[data-is="cafooter"] .content{ color: #999; font-size: .875rem; padding: 2rem; } @media screen and (min-width: 92em) { cafooter .content,[data-is="cafooter"] .content{ padding: 2rem calc(50% - 44rem); } }',"",function(a){}),riot.tag2("caplanner",'<apptabheaders isclicked="{this.handleClick}" tabs="{this.tabs}"></appTabHeaders> <div class="container"> <apptabcontents tabs="{this.tabs}" use_image="{true}"></appTabContents> </div>','caplanner .container,[data-is="caplanner"] .container{ border: 1px solid var(--border-color); border-top: none; padding: .25rem; } caplanner .content-main,[data-is="caplanner"] .content-main{ padding: 1rem; display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 2rem; } caplanner .planner-content,[data-is="caplanner"] .planner-content{ grid-column: 1/3; } caplanner .planner-sidebar,[data-is="caplanner"] .planner-sidebar{ grid-column: 3/4; } caplanner .planner-headings,[data-is="caplanner"] .planner-headings{ margin-top: 0; } caplanner .fa-bullhorn,[data-is="caplanner"] .fa-bullhorn{ float: left; border-radius: 6px; margin-right: .5rem; font-size: 2rem; padding: .2em; background-color: #999; width: 60px; height: 40px; display: block; transform: translateY(-.25rem); } caplanner .callout-box,[data-is="caplanner"] .callout-box{ background: var(--bg-gray); padding: 1rem; border: 1px solid var(--border-color); margin-bottom: 1rem; } caplanner .planner-details,[data-is="caplanner"] .planner-details{ color: #999; font-size: 1rem; }',"",function(a){var t=this;this.tabs=[{id:0,title:"About",active:!0,content:"content/about.html"},{id:1,title:"Activity Plan",image:"planner-activity.jpg"},{id:2,title:"Examples",image:"planner-examples.jpg"}],this.handleClick=function(a){t.tabs.forEach(function(t){a.item.tab.id==t.id?t.active=!0:t.active=!1}),t.update()}}),riot.tag2("caengage",'<div class="engage"> <img src="images/engage.jpg" alt=""> </div>','caengage .engage,[data-is="caengage"] .engage{ margin-bottom: 2rem; } @media screen and (min-width: 60em) { caengage .engage,[data-is="caengage"] .engage{ position: absolute; bottom: 2rem; margin-bottom: unset; } }',"",function(a){}),riot.tag2("caheader",'<header role="banner" class="ca-head"> <div class="ca-head__main"> <h1 class="title">Hanging Hashtags</h1> <calogoblock></caLogoBlock> <caengage></caEngage> </div> <div class="ca-head__side"> <caresources></caResources> </div> </header>','caheader .ca-head,[data-is="caheader"] .ca-head{ background: #4a4a4a; padding: 2rem; } caheader .ca-head__main,[data-is="caheader"] .ca-head__main{ grid-column: 1; } caheader .ca-head__side,[data-is="caheader"] .ca-head__side{ grid-column: 2; } caheader .title,[data-is="caheader"] .title{ font-family: \'Open Sans\', sans-serif; font-size: 3rem; font-weight: 100; color: #fdfdfd; margin: 0; } @media screen and (min-width: 60em) { caheader .ca-head,[data-is="caheader"] .ca-head{ display: grid; grid-template-columns: 2fr 1fr; grid-column-gap: 2rem; justify-content: space-between; min-height: 20em; position: relative; } } @media screen and (min-width: 92em) { caheader .ca-head,[data-is="caheader"] .ca-head{ padding: 2rem calc(50% - 44em); } }',"",function(a){}),riot.tag2("calogoblock",'<div class="media"> <img class="media__logo" src="images/logo.jpg" alt="logo"> <div class="media__desc"> <span class="break">Building Backgrounds</span>Demonstrations and Experiences </div> </div>','calogoblock .media,[data-is="calogoblock"] .media{ color: #999; display: flex; align-items: center; } calogoblock .media__logo,[data-is="calogoblock"] .media__logo{ margin-right: 1em; } calogoblock .media__desc,[data-is="calogoblock"] .media__desc{ line-height: 1.4; } calogoblock .break,[data-is="calogoblock"] .break{ display: block; }',"",function(a){}),riot.tag2("caresources",'<div class="resources"> <appsubtitle txt="Resources"></appSubtitle> <ul class="list"> <li class="item"><a class="link link--icon" href="#"><i class="icon fas fa-download"></i></a><a class="link" href="#"><strong>Download:</strong> Hanging Hashtag Think Sheet</a></li> <li class="item"><a class="link link--icon" href="#"><i class="icon fas fa-external-link-alt"></i><a class="link" href="#"><strong>Link:</strong> Using Visuals to Build Interest and Understanding</a></li> <li class="item"><a class="link link--icon" href="#"><i class="icon fas fa-external-link-alt"></i><a class="link" href="#"><strong>Link:</strong> Edutopia — Common Core in Action: 10 Visual Literacy Strategies (Edutopia)</a></li> </ul> </div>','caresources .resources,[data-is="caresources"] .resources{ background: white; padding: 1rem 1.5rem; } caresources .subtitle,[data-is="caresources"] .subtitle{ margin-top: 0; } caresources .list,[data-is="caresources"] .list{ margin-left: 0; padding-left: 0; list-style: none; } caresources .item,[data-is="caresources"] .item{ margin-bottom: 1em; display: flex; align-items: center; } caresources .link,[data-is="caresources"] .link{ text-decoration: none; background: white; line-height: 1.4; margin-bottom:1em; color: var(--text-color-soft); } caresources .link:hover,[data-is="caresources"] .link:hover{ color: var(--text-color); } caresources .link--icon,[data-is="caresources"] .link--icon{ } caresources .link--icon:hover,[data-is="caresources"] .link--icon:hover{ text-decoration: none; } caresources .icon,[data-is="caresources"] .icon{ font-size: 1.5em; margin-right: 1em; }',"",function(a){}),riot.tag2("casidebar","<appvideo></appVideo> <casupport></caSupport>",'casidebar .subtitle,[data-is="casidebar"] .subtitle{ color: #666; }',"",function(a){}),riot.tag2("casupport",'<appsubtitle txt="Support Levels"></appSubtitle> <div class="buttons"> <appbutton txt="Show Filters"></appButton> <appbutton txt="Batch Recommend" icon="far fa-thumbs-up"></appButton> </div> <casupportbox></caSupportBox>','casupport .buttons,[data-is="casupport"] .buttons{ margin-bottom: 1rem; }',"",function(a){}),riot.tag2("casupportbox",'<div class="support-box"> <casupportsegment dataid="1" support="High" grade="1 & 2" total="8"></caSupportSegment> <casupportsegment dataid="2" support="Moderate" grade="3 & 4" total="3"></caSupportSegment> <casupportsegment dataid="3" support="Low" grade="5 & 6" total="4"></caSupportSegment> </div>','casupportbox .support-box,[data-is="casupportbox"] .support-box{ border: 1px solid var(--border-color); }',"",function(a){}),riot.tag2("casupportsegment",'<div class="segment"> <div class="segment-heading"> <h3 class="title">{opts.support} Support: <span class="subtitle">Speaking {opts.grade}</span></h3> <a href="#" onclick="{this.handleClick}" class="student-link btn btn--small btn--secondary" data-link="{opts.dataid}">{opts.total} students </a> </div> <div class="student-list" id="list-{opts.dataid}"> <ul> <li>Geraldine Seydoux</li> <li>Lene Vestergaard Hau</li> <li>Patricia S. Goldman-Rakic</li> <li>Ruzena Bajcsy</li> <li>Shirley Ann Jackson</li> <li>Wolfgang Ernst Pauli</li> </ul> </div> <div class="segment-details"> <ul class="details-list"> <li>Lorem ipsum dolor sit amet, consectetur elit.</li> <li>Molestias, ab, quidem! Blanditiis dolore dolorem.</li> </ul> </div> </div> </div>','casupportsegment .student-link,[data-is="casupportsegment"] .student-link{ display: inline-block; margin-right: 1rem; } casupportsegment .student-names,[data-is="casupportsegment"] .student-names{ display: none; } casupportsegment .segment-heading,[data-is="casupportsegment"] .segment-heading{ border-bottom: 2px solid var(--border-color); display: flex; justify-content: space-between; align-items: baseline; } casupportsegment .title,[data-is="casupportsegment"] .title{ margin-left: 1rem; } casupportsegment .subtitle,[data-is="casupportsegment"] .subtitle{ font-size: .825em; } casupportsegment .segment-details,[data-is="casupportsegment"] .segment-details{ border-bottom: 2px solid var(--border-color); background-color: var(--bg-gray); } casupportsegment .details-list,[data-is="casupportsegment"] .details-list{ margin: 0 1rem; padding: 1rem; } casupportsegment .see-students,[data-is="casupportsegment"] .see-students{ margin-right: 1rem; } casupportsegment .hide-students,[data-is="casupportsegment"] .hide-students{ display: none; }',"",function(a){var t=this;this.handleClick=function(a){var e=a.target.dataset.link;document.getElementById("list-"+e).classList.toggle("hide-students"),t.update()},this.on("mount",function(){[].concat(_toConsumableArray(document.querySelectorAll(".student-list"))).forEach(function(a){a.classList.add("hide-students")})})}),riot.tag2("apptabcontent",'<div class="{active: opts.tab.active} tab-content"> <img if="{opts.tab.image}" riot-src="images/{opts.tab.image}" alt=""> <div class="content-main" ref="content" if="{opts.tab.content}"> </div> </div>','apptabcontent .tab-content,[data-is="apptabcontent"] .tab-content{ display: none; } apptabcontent .tab-content.active,[data-is="apptabcontent"] .tab-content.active{ display: block; }',"",function(a){var t=this;this.on("mount",function(){this.opts.tab.content&&function(a){var t=new XMLHttpRequest;function o(a){"load"===a.type?e(t.responseText):"error"===a.type&&console.log("error loading content to appTabContent")}t.open("GET",a,!0),t.send(),t.addEventListener("load",o,!1),t.addEventListener("error",o,!1)}(this.opts.tab.content)});var e=function(a){t.refs.content.innerHTML=a}}),riot.tag2("apptabcontents",'<div class="appTabContents"> <apptabcontent each="{tab in opts.tabs}" tab="{tab}" use_image="{parent.opts.use_image}"></appTabContent> </div>',"","",function(a){}),riot.tag2("apptabheaders",'<ul class="headers"> <virtual each="{tab in opts.tabs}"> <li class="header {active: tab.active}" onclick="{parent.opts.isclicked}">{tab.title}</li> </virtual> </ul>','apptabheaders .headers,[data-is="apptabheaders"] .headers{ display: flex; list-style: none; padding: 0; margin: 0; } apptabheaders .header,[data-is="apptabheaders"] .header{ flex: 1 1 33.3333%; text-align: center; font-weight: 700; border: 1px solid var(--border-color); border-right: none; padding: 1em; font-size: 1.25rem; background-color: var(--bg-gray); cursor: pointer; transition: background-color .5s; } apptabheaders .header.active,[data-is="apptabheaders"] .header.active{ background-color: #fff; } apptabheaders .header:not(.active):hover,[data-is="apptabheaders"] .header:not(.active):hover{ background-color: #cfcfcf; } apptabheaders .header:last-of-type,[data-is="apptabheaders"] .header:last-of-type{ border-right: 1px solid var(--border-color); }',"",function(a){});