Page({
  data: {
      array: ['第一周', '第二周', '第三周', '第四周', '第五周', '第六周', '第七周', '第八周', '第九周', '第十周', '第十一周', '第十二周', '第十三周', '第十四周', '第十五周', '第十六周'],
      index: 0,
      objectArray: [
      {
        id: 0,
        name: '第一周'
      },
      {
        id: 1,
        name: '第二周'
      },
      {
        id: 2,
        name: '第三周'
      },
      {
        id: 3,
        name: '第四周'
      },
      {
        id: 4,
        name: '第五周'
      },
      {
        id: 5,
        name: '第六周'
      },
      {
        id: 6,
        name: '第七周'
      },
      {
        id: 7,
        name: '第八周'
      },
      {
        id: 8,
        name: '第九周'
      },
      {
        id: 9,
        name: '第十周'
      },
      {
        id: 10,
        name: '第十一周'
      },
      {
        id: 11,
        name: '第十二周'
      },
      {
        id: 12,
        name: '第十三周'
      },
      {
        id: 13,
        name: '第十四周'
      },
      {
        id: 14,
        name: '第十五周'
      },
      {
        id: 15,
        name: '第十六周'
      }
    ],
      weeknum:1,
      list:[],
      bc127:"",
      bc347:"",
      bc57:"",
      bc677:"",
      bc897:"",
      bc07:"",
      bcAB7:"",
      bcC7:"",
      bc121:"",
      bc341:"",
      bc51:"",
      bc671:"",
      bc891:"",
      bc01:"",
      bcAB1:"",
      bcC1:"",
      bc122:"",
      bc342:"",
      bc52:"",
      bc672:"",
      bc892:"",
      bc02:"",
      bcAB2:"",
      bcC2:"",
      bc123:"",
      bc343:"",
      bc53:"",
      bc673:"",
      bc893:"",
      bc03:"",
      bcAB3:"",
      bcC3:"",
      bc124:"",
      bc344:"",
      bc54:"",
      bc674:"",
      bc894:"",
      bc04:"",
      bcAB4:"",
      bcC4:"",
      bc125:"",
      bc345:"",
      bc55:"",
      bc675:"",
      bc895:"",
      bc05:"",
      bcAB5:"",
      bcC5:"",
      bc126:"",
      bc346:"",
      bc56:"",
      bc676:"",
      bc896:"",
      bc06:"",
      bcAB6:"",
      bcC6:"",
      it127:[],
      it347:[],
      it57:[],
      it677:[],
      it897:[],
      it07:[],
      itAB7:[],
      itC7:[],
      it121:[],
      it341:[],
      it51:[],
      it671:[],
      it891:[],
      it01:[],
      itAB1:[],
      itC1:[],
      it122:[],
      it342:[],
      it52:[],
      it672:[],
      it892:[],
      it02:[],
      itAB2:[],
      itC2:[],
      it123:[],
      it343:[],
      it53:[],
      it673:[],
      it893:[],
      it03:[],
      itAB3:[],
      itC3:[],
      it124:[],
      it344:[],
      it54:[],
      it674:[],
      it894:[],
      it04:[],
      itAB4:[],
      itC4:[],
      it125:[],
      it345:[],
      it55:[],
      it675:[],
      it895:[],
      it05:[],
      itAB5:[],
      itC5:[],
      it126:[],
      it346:[],
      it56:[],
      it676:[],
      it896:[],
      it06:[],
      itAB6:[],
      itC6:[],
      abs127:"",
      abs347:"",
      abs57:"",
      abs677:"",
      abs897:"",
      abs07:"",
      absAB7:"",
      absC7:"",
      abs121:"",
      abs341:"",
      abs51:"",
      abs671:"",
      abs891:"",
      abs01:"",
      absAB1:"",
      absC1:"",
      abs122:"",
      abs342:"",
      abs52:"",
      abs672:"",
      abs892:"",
      abs02:"",
      absAB2:"",
      absC2:"",
      abs123:"",
      abs343:"",
      abs53:"",
      abs673:"",
      abs893:"",
      abs03:"",
      absAB3:"",
      absC3:"",
      abs124:"",
      abs344:"",
      abs54:"",
      abs674:"",
      abs894:"",
      abs04:"",
      absAB4:"",
      absC4:"",
      abs125:"",
      abs345:"",
      abs55:"",
      abs675:"",
      abs895:"",
      abs05:"",
      absAB5:"",
      absC5:"",
      abs126:"",
      abs346:"",
      abs56:"",
      abs676:"",
      abs896:"",
      abs06:"",
      absAB6:"",
      absC6:"",
  },
  ctt:function(){
      var that = this;
        var temp=[];
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="7")&&(that.data.list[i].time==="1,2")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs127:"abs127",
                    it127:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs127:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="7")&&(that.data.list[i].time==="3,4")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs347:"abs347",
                    it347:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs347:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="7")&&(that.data.list[i].time==="3,4,5")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs57:"abs57",
                    it57:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs57:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="7")&&(that.data.list[i].time==="6,7")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs677:"abs677",
                    it677:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs677:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="7")&&(that.data.list[i].time==="8,9")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs897:"abs897",
                    it897:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs897:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="7")&&(that.data.list[i].time==="8,9,0")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs07:"abs07",
                    it07:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs07:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="7")&&(that.data.list[i].time==="A,B")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    absAB7:"absAB7",
                    itAB7:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        absAB7:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="7")&&(that.data.list[i].time==="A,B,C")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    absC7:"absC7",
                    itC7:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        absC7:"exclass"
                    })
                }
            }
        }//7
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="1")&&(that.data.list[i].time==="1,2")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs121:"abs121",
                    it121:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs121:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="1")&&(that.data.list[i].time==="3,4")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs341:"abs341",
                    it341:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs341:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="1")&&(that.data.list[i].time==="3,4,5")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs51:"abs51",
                    it51:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs51:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="1")&&(that.data.list[i].time==="6,7")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs671:"abs671",
                    it671:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs671:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="1")&&(that.data.list[i].time==="8,9")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs891:"abs891",
                    it891:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs891:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="1")&&(that.data.list[i].time==="8,9,0")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs01:"abs01",
                    it01:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs01:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="1")&&(that.data.list[i].time==="A,B")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    absAB1:"absAB1",
                    itAB1:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        absAB1:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="1")&&(that.data.list[i].time==="A,B,C")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    absC1:"absC1",
                    itC1:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        absC1:"exclass"
                    })
                }
            }
        }//1
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="2")&&(that.data.list[i].time==="1,2")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs122:"abs122",
                    it122:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs122:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="2")&&(that.data.list[i].time==="3,4")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs342:"abs342",
                    it342:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs342:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="2")&&(that.data.list[i].time==="3,4,5")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs52:"abs52",
                    it52:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs52:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="2")&&(that.data.list[i].time==="6,7")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs672:"abs672",
                    it672:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs672:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="2")&&(that.data.list[i].time==="8,9")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs892:"abs892",
                    it892:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs892:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="2")&&(that.data.list[i].time==="8,9,0")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs02:"abs02",
                    it02:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs02:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="2")&&(that.data.list[i].time==="A,B")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    absAB2:"absAB2",
                    itAB2:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        absAB2:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="2")&&(that.data.list[i].time==="A,B,C")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    absC2:"absC2",
                    itC2:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        absC2:"exclass"
                    })
                }
            }
        }//2
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="3")&&(that.data.list[i].time==="1,2")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs123:"abs123",
                    it123:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs123:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="3")&&(that.data.list[i].time==="3,4")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs343:"abs343",
                    it343:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs343:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="3")&&(that.data.list[i].time==="3,4,5")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs53:"abs53",
                    it53:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs53:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="3")&&(that.data.list[i].time==="6,7")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs673:"abs673",
                    it673:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs673:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="3")&&(that.data.list[i].time==="8,9")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs893:"abs893",
                    it893:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs893:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="3")&&(that.data.list[i].time==="8,9,0")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs03:"abs03",
                    it03:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs03:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="3")&&(that.data.list[i].time==="A,B")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    absAB3:"absAB3",
                    itAB3:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        absAB3:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="3")&&(that.data.list[i].time==="A,B,C")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    absC3:"absC3",
                    itC3:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        absC3:"exclass"
                    })
                }
            }
        }//3
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="4")&&(that.data.list[i].time==="1,2")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs124:"abs124",
                    it124:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs124:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="4")&&(that.data.list[i].time==="3,4")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs344:"abs344",
                    it344:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs344:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="4")&&(that.data.list[i].time==="3,4,5")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs54:"abs54",
                    it54:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs54:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="4")&&(that.data.list[i].time==="6,7")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs674:"abs674",
                    it674:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs674:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="4")&&(that.data.list[i].time==="8,9")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs894:"abs894",
                    it894:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs894:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="4")&&(that.data.list[i].time==="8,9,0")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs04:"abs04",
                    it04:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs04:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="4")&&(that.data.list[i].time==="A,B")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    absAB4:"absAB4",
                    itAB4:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        absAB4:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="4")&&(that.data.list[i].time==="A,B,C")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    absC4:"absC4",
                    itC4:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        absC4:"exclass"
                    })
                }
            }
        }//4
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="5")&&(that.data.list[i].time==="1,2")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs125:"abs125",
                    it125:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs125:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="5")&&(that.data.list[i].time==="3,4")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs345:"abs345",
                    it345:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs345:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="5")&&(that.data.list[i].time==="3,4,5")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs55:"abs55",
                    it55:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs55:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="5")&&(that.data.list[i].time==="6,7")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs675:"abs675",
                    it675:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs675:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="5")&&(that.data.list[i].time==="8,9")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs895:"abs895",
                    it895:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs895:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="5")&&(that.data.list[i].time==="8,9,0")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs05:"abs05",
                    it05:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs05:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="5")&&(that.data.list[i].time==="A,B")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    absAB5:"absAB5",
                    itAB5:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        absAB5:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="5")&&(that.data.list[i].time==="A,B,C")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    absC5:"absC5",
                    itC5:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        absC5:"exclass"
                    })
                }
            }
        }//5
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="6")&&(that.data.list[i].time==="1,2")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs126:"abs126",
                    it126:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs126:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="6")&&(that.data.list[i].time==="3,4")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs346:"abs346",
                    it346:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs346:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="6")&&(that.data.list[i].time==="3,4,5")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs56:"abs56",
                    it56:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs56:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="6")&&(that.data.list[i].time==="6,7")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs676:"abs676",
                    it676:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs676:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="6")&&(that.data.list[i].time==="8,9")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs896:"abs896",
                    it896:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs896:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="6")&&(that.data.list[i].time==="8,9,0")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    abs06:"abs06",
                    it06:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        abs06:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="6")&&(that.data.list[i].time==="A,B")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    absAB6:"absAB6",
                    itAB6:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        absAB6:"exclass"
                    })
                }
            }
        }
        for(var i=0;i<that.data.list.length;i++){
            if((that.data.list[i].date==="6")&&(that.data.list[i].time==="A,B,C")&&(that.data.list[i].week[0]<=that.data.weeknum)&&(that.data.list[i].week[1]>=that.data.weeknum)){
                temp.push(that.data.list[i]);
                console.log(temp);
                that.setData({
                    absC6:"absC6",
                    itC6:temp
                });
                temp=[];
                break;
            }
            else{
                if(i==that.data.list.length){
                    that.setData({
                        absC6:"exclass"
                    })
                }
            }
        }//6
    },
    setcolor:function(){
      var tempcolor="#";
      var randomArr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
      do {
          for (var i = 0; i < 6; i++) {
              tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
          }
          ;
          this.setData({
              bc127: tempcolor,
          })
      }while(tempcolor=="#ffffff");
      tempcolor="#";
      do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc347: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
      do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc57: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
      do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc677: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
      do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc897: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
      do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc07: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
      do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bcAB7: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
      do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bcC7: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc121: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc341: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc51: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc671: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc891: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc01: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bcAB1: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bcC1: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc122: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc342: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc52: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc672: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc892: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc02: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bcAB2: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bcC2: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc123: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc343: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc53: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc673: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc893: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc03: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bcAB3: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bcC3: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc124: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc344: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc54: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc674: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc894: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc04: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bcAB4: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bcC4: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc125: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc345: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc55: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc675: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc895: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc05: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bcAB5: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bcC5: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc126: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc346: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc56: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc676: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc896: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bc06: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bcAB6: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
        do {
            for (var i = 0; i < 6; i++) {
                tempcolor += randomArr[Math.ceil(Math.random() * (15 - 0) + 0)];
            }
            ;
            this.setData({
                bcC6: tempcolor,
            })
        }while(tempcolor=="#ffffff");
        tempcolor="#";
    },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url:'https://www.easy-mock.com/mock/5d58df567a33fd35b3c7b58a/',
      headers:{
        'Content-Type':'application/json'
      },
      success:function(res){
        console.log(res.data)
        that.setData({
          list:res.data.course,
        })
         that.ctt();
        that.setcolor();
      }
    })
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
      var tempnum=Number(e.detail.value)+1;
    this.setData({
      index: e.detail.value,
      weeknum:tempnum,
        it127:[],
        it347:[],
        it57:[],
        it677:[],
        it897:[],
        it07:[],
        itAB7:[],
        itC7:[],
        it121:[],
        it341:[],
        it51:[],
        it671:[],
        it891:[],
        it01:[],
        itAB1:[],
        itC1:[],
        it122:[],
        it342:[],
        it52:[],
        it672:[],
        it892:[],
        it02:[],
        itAB2:[],
        itC2:[],
        it123:[],
        it343:[],
        it53:[],
        it673:[],
        it893:[],
        it03:[],
        itAB3:[],
        itC3:[],
        it124:[],
        it344:[],
        it54:[],
        it674:[],
        it894:[],
        it04:[],
        itAB4:[],
        itC4:[],
        it125:[],
        it345:[],
        it55:[],
        it675:[],
        it895:[],
        it05:[],
        itAB5:[],
        itC5:[],
        it126:[],
        it346:[],
        it56:[],
        it676:[],
        it896:[],
        it06:[],
        itAB6:[],
        itC6:[],
        abs127:"",
        abs347:"",
        abs57:"",
        abs677:"",
        abs897:"",
        abs07:"",
        absAB7:"",
        absC7:"",
        abs121:"",
        abs341:"",
        abs51:"",
        abs671:"",
        abs891:"",
        abs01:"",
        absAB1:"",
        absC1:"",
        abs122:"",
        abs342:"",
        abs52:"",
        abs672:"",
        abs892:"",
        abs02:"",
        absAB2:"",
        absC2:"",
        abs123:"",
        abs343:"",
        abs53:"",
        abs673:"",
        abs893:"",
        abs03:"",
        absAB3:"",
        absC3:"",
        abs124:"",
        abs344:"",
        abs54:"",
        abs674:"",
        abs894:"",
        abs04:"",
        absAB4:"",
        absC4:"",
        abs125:"",
        abs345:"",
        abs55:"",
        abs675:"",
        abs895:"",
        abs05:"",
        absAB5:"",
        absC5:"",
        abs126:"",
        abs346:"",
        abs56:"",
        abs676:"",
        abs896:"",
        abs06:"",
        absAB6:"",
        absC6:"",
    })
      console.log("weeknum="+this.data.weeknum)
      this.ctt();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})
