class TicTacToe {
    
    constructor() {
     
     this.numberOfTurnes=1;
     this.field = new Array(3);
     for (var i = 0; i < this.field.length; i++) {
        this.field[i] = new Array(3);
     };

     this.emptySymbol = 5;
     for (let i=0;i<3;i++){
         for (let j=0;j<3;j++){
             this.field[i][j]=this.emptySymbol;
         }
     }
     
    }

    getCurrentPlayerSymbol() {
        if (this.numberOfTurnes%2==0){
            return "o"}
            else return "x";


    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex]==this.emptySymbol){
            this.field[rowIndex][columnIndex]=this.getCurrentPlayerSymbol();
            this.numberOfTurnes=this.numberOfTurnes+1;
    }

    }

    isFinished() {
       if (this.getWinner()!=null||this.isDraw()==true){return true}
       else return false;

    }

    getWinner() { 
        for (let a=0;a<3;a++){
            if (this.field[a][0]+this.field[a][1]+this.field[a][2]=="ooo"||this.field[0][a]+this.field[1][a]+this.field[2][a]=="ooo"){ return "o"};
            if (this.field[a][0]+this.field[a][1]+this.field[a][2]=="xxx"||this.field[0][a]+this.field[1][a]+this.field[2][a]=="xxx"){ return "x"};
        }
        if (this.field[0][0]+this.field[1][1]+this.field[2][2]=="ooo"||this.field[0][2]+this.field[1][1]+this.field[2][0]=="ooo"){return "o"};
        if (this.field[0][0]+this.field[1][1]+this.field[2][2]=="xxx"||this.field[0][2]+this.field[1][1]+this.field[2][0]=="xxx"){return "x"};
        return null;
    }

    noMoreTurns() {
        for (let i=0;i<3;i++){
            for (let j=0;j<3;j++){
        if(this.field[i][j]==this.emptySymbol){return false}}};
        return true;

    }

    isDraw() {
        if((this.noMoreTurns()==true)&&(this.getWinner()==null)){return true};
        return false;

    }

    getFieldValue(rowIndex, colIndex) {
        if (this.field[rowIndex][colIndex]==this.emptySymbol){return null};
        return this.field[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;

