const app = Vue.createApp({
    data(){
        return{
            title: "Vue.js Bootcamp 1.hafta",
            content: "Lorem ipsum..",
            eduflow:{
                title:"Müfredat için tıklayınız.",
                target:"_blank",
                url:"https://eduflow.kablosuzkedi.com",
                alt:"mufredat",
            },
            owner: "asd",
            coords:{
                x:0,
                y:0,
            }
        }
    },
    methods:{
        changeTitle(ptitle){
            // this.title = "Bu değişmiş title";
            this.title =ptitle;
        },
        updateCoords(message,event){
            // console.log(message,event.x, event.y);
            this.changeTitle(`${event.x}, ${event.y}`);
            this.coords.x=event.x;
            this.coords.y=event.y;
        }
    }
}).mount("#app");