function threeParams(s1,s2,b) {
    if (b){
        return s1 + s2;
    }
    else {
        return s2 + s1;
    }
}
 alert(threeParams("bbb","abc",false));
