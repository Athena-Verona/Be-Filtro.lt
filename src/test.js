// Import essential functions
import pageEssentials from "./utils/navbar";
import './styles/party-info.css';
import './styles/test.css';

// Initialize essential functions
pageEssentials()

var y = 0; //haha zero opinion
var x = 0;
function opinion_variableX(rate, side){
    //for the first 10 questions
    if (side == 0){
        if(rate==1) x-=2;
		if(rate==2) x--;
		if(rate==4) x++;
		if(rate==5) x+=2;
    }
    if (side == 1){
        if(rate==1) x+=2;
		if(rate==2) x++;
		if(rate==4) x--;
		if(rate==5) x-=2;
    }
}
function opinion_variableY(rate, side){
    //for the remaining 11 to 20 questions
    if (side == 0){
        if(rate==1) y-=2;
        if(rate==2) y--;
        if(rate==4) y++;
        if(rate==5) y+=2;
    }
    if (side == 1){
        if(rate==1) x+=2;
        if(rate==2) x++;
        if(rate==4) x--;
        if(rate==5) x-=2;
    }
}
function opinion_variableANSWER(){
    window.alert(x, y);
}