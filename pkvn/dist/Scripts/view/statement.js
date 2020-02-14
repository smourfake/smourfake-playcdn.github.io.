!function(t){t(["jquery","api","utils","translate"],function(t,e,a,s){function n(){t("#tblStatementGameRounds").css("display","none"),t("#tblStatementGames").css("display","none"),t("#tblStatementSettlements").css("display","none"),t("#tblStatementDays").css("display","none")}function l(){this.data=new Object,this.Show=function(t,a,s,n){console.log(n),n&&(v=n),a&&(this.data.date=a,u=a),s&&(this.data.gameId=s),t&&(this.data.page=t,y=t);var i=JSON.stringify(this.data);e.POST("/api/getGameDetail",i,this.Success,this.Fail)},this.Success=function(e,l,o){var r=t.parseJSON(e),m=u;for(n(),t("#tblStatementGameRounds").css("display","table"),t("#tblStatementGameRounds > tbody").html(""),t("#StatementTitle").html('<span class="translate">Statement</span> '+v).attr("workingDate",u),i=0;i<r.length-1;i++){var c=a.Money(parseInt(r[i].amt),2),g=a.Money(parseInt(r[i].com),2),b=a.Money(parseInt(r[i].win),2),h=r[i].win<0?"color:red":"";if("-1"!=r[i].id){var f=r[i].ref+"<br />"+r[i].date,w='<span class="bold">'+r[i].title+"</span><br />"+r[i].desc,e=r[i].res;t("#tblStatementGameRounds > tbody").append("<tr><td>"+(i+1+100*(y-1))+'</td><td class="td-left">'+f+'</td><td class="td-left">'+w+'</td><td class="td-md">'+e+"</td><td>"+c+"</td><td>"+g+'</td><td class="bd" style="'+h+'">'+b+"</td></tr>")}else t("#tblStatementGameRounds > tbody").append("<tr><td></td><td></td><td></td><td></td><td>"+c+"</td><td>"+g+'</td><td class="bd" style="'+h+'">'+b+"</td></tr>")}var k=r[r.length-1].total,D=r[r.length-1].size,O=Math.ceil(parseFloat(k)/parseFloat(D)),G="";for(p=1;p<=O;p++)y==p?pagingNum='<div class="left" style="margin-right:5px;font-size:15px;font-weight:bold;color:blue">'+p+"</div>":pagingNum='<div class="btn left gd_page">'+p+"</div>",G+=p<O?pagingNum+'<span class="left" style="margin-right:5px">|</span>':pagingNum;t("#StatementGameRoundsPaging").html(G),t(".gd_page").click(function(){S.Show(t(this).html())});var F='<div class="btn right themeBtn translate" id="game_back">BACK</div>';t("#ctrlStatement").html(F),t("#game_back").click(function(){d(m)}),s()},this.Fail=function(t,e){console.log(t+":"+e)}}function d(t){var a=new Object;a.date=t;var s=JSON.stringify(a);e.POST("/api/getGameInfo",s,o,r)}function o(e,l,d){var o=t.parseJSON(e);for(n(),t("#tblStatementGames").css("display","table"),t("#tblStatementGames > tbody").html(""),t("#StatementTitle").html("Statement"),i=0;i<o.length;i++){var r=a.AddCommas(o[i].amt),m=a.Money(parseInt(o[i].winAmt),2),c=a.Money(parseInt(o[i].comAmt),2),p=parseInt(o[i].winAmt)<0?"color:red;font-weight:bold":parseFloat(o[i].winAmt)>0?"font-weight:bold":"";if("1"!=o[i].summary){var g=o[i].workingDate.split("|"),h=g[0],f=g[1],y=o[i].game,u=i+1,v="workingDate="+h+" gameId="+o[i].gameId;t("#tblStatementGames > tbody").append('<tr><td class="td-left">'+u+'</td><td class="gameDate td-left" '+v+">"+h+' (<span class="translate">'+f+'</span>)</td><td class="td-left">'+y+"</td><td>"+r+'</td><td style="'+p+'">'+m+"</td><td>"+c+"</td></tr>")}else t("#tblStatementGames > tbody").append("<tr><td></td><td></td><td></td><td>"+r+'</td><td style="'+p+'">'+m+"</td><td>"+c+"</td></tr>")}t(".gameDate").click(function(){S.Show(1,t(this).attr("workingDate"),t(this).attr("gameId"),t(this).html())});var w='<div class="btn right themeBtn translate" id="game_back">BACK</div>';t("#ctrlStatement").html(w),t("#game_back").click(function(){b(1)}),s()}function r(t,e){console.log(t+":"+e)}function m(){var a=t(this).parent().find("td").eq(0).find(".stmtDateS1").html(),s=new Object;s.date=a;var n=JSON.stringify(s);e.POST("/api/getSettlement",n,c,g)}function c(e,l,d){var o=t.parseJSON(e);for(n(),t("#tblStatementSettlements").css("display","table"),t("#tblStatementSettlements > tbody").html(""),i=0;i<o.length;i++){var r=o[i].date,m=r.split("|"),c=m[0],p=m[1],g=o[i].desc,h=a.Money(parseFloat(o[i].amt),2),f=o[i].amt<0?"color:red":"";t("#tblStatementSettlements > tbody").append("<tr><td>"+c+' (<span class="translate">'+p+'</span>)</td><td class="td-left translate">'+g+'</td><td class="bd" style="'+f+'">'+h+"</td></tr>")}var S='<div class="btn right themeBtn translate" id="game_back">BACK</div>';t("#ctrlStatement").html(S),t("#game_back").click(function(){b(1)}),s()}function g(t,e){console.log(t+":"+e)}function b(t){var a=new Object;a.thisweek=t;var s=JSON.stringify(a);e.POST("/api/getStatement",s,h,f)}function h(e,l,o){var r=t.parseJSON(e);for(n(),t("#tblStatementDays").css("display","table"),t("#tblStatementDays > tbody").html(""),i=0;i<r.length;i++){var c=r[i].summaryDate,p=c.split("|"),g=p[0],h=p[1],f=a.Money(parseInt(r[i].stakePlaced),0),S=a.Money(parseFloat(r[i].winLose),2),y=a.Money(parseFloat(r[i].commission),2),u=a.Money(parseFloat(r[i].settled),2),v=a.Money(parseFloat(r[i].currBalance),2),w=parseFloat(r[i].winLose)<0?"color:red;font-weight:bold":parseFloat(r[i].winLose)>0?"font-weight:bold":"",k=0!=parseFloat(r[i].settled)?"stmtSettled":"";t("#tblStatementDays > tbody").append('<tr><td class="stmtDate"><span class="stmtDateS1">'+g+'</span> (<span class="translate">'+h+"</span>)</td><td>"+f+'</td><td style="'+w+'">'+S+"</td><td>"+y+'</td><td class="'+k+'">'+u+'</td><td style="bold">'+v+"</td><tr>")}t(".stmtDate").click(function(){d(t(this).find(".stmtDateS1").html())}),t(".stmtSettled").click(m);var D='<div class="btn right themeBtn translate" id="stmt_thisweek">THIS WEEK</div><div class="btn right themeBtn translate" id="stmt_lastweek" style="margin-right:10px">LAST WEEK</div>';t("#ctrlStatement").html(D),t("#stmt_thisweek").click(function(){b(1)}),t("#stmt_lastweek").click(function(){b(0)}),s()}function f(t,e){console.log(t+":"+e)}var S=new l;return function(t){b(1)};var y,u,v})}(myGlobalRequire.define);