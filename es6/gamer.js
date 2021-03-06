class Gamer {
    constructor(id, name, carpetsCount, gamerMoney, carpetsOnField, carpet, gamerNameColor) {
        this.id = id;
        this.gamerName = name;
        this.gamerNameColor = gamerNameColor;
        this.carpetsCount = carpetsCount;
        this.gamerMoney = gamerMoney;
        this.carpetsOnField = carpetsOnField;
        this.carpet = carpet;
        // this.color = color;
        // this.colorS = colorS;
        this.carpetsCountHTMLid = "carpet_" + id;
        this.gamerMoneyHTMLid = "money_" + id;
        this.carpetsOnFieldHTMLid = "carpet_on_field_" + id;
        this.gamerNameHTMLid = "gamer_name_" + id;
        this.winHTML = "win_" + id;
        this.final = false;

        this.receivedCountCarpetOnField = 0;
    }

    naming() {
        document.getElementById(this.gamerNameHTMLid).innerHTML = this.gamerName;
    }

    displayInfo(receivedCountCarpet, receivedCountCarpetOnField, recievedMoney) {
        let countCarpet = 0;
        let countCarpOnFieldFirst = 0;
        let countCarpOnFieldSecond = 0;
        let countCarpetOnField = 0;
        let countMoney = 0;

        countCarpet = document.getElementById(this.carpetsCountHTMLid);
        // countCarpetOnField = document.getElementById(this.carpetsOnFieldHTMLid);
        countMoney = document.getElementById(this.gamerMoneyHTMLid);

        if (countCarpet.innerHTML > 0) {
            if (+countCarpet.innerHTML === 1) this.final = true;
            let tmp = 0;

            tmp = Number(countCarpet.innerHTML);
            countCarpet.innerHTML = tmp - receivedCountCarpet;
            // tmp = Number(countCarpetOnField.innerHTML);
            // countCarpetOnField.innerHTML = tmp + receivedCountCarpetOnField;
            tmp = Number(countMoney.innerHTML);
            countMoney.innerHTML = tmp + recievedMoney;
            // countMoney.innerHTML = 29;

            this.receivedCountCarpetOnField += receivedCountCarpetOnField;
        }
    }

    determineWinner() {
        let countCarpet = 0;
        let countCarpOnFieldFirst = 0;
        let countCarpOnFieldSecond = 0;
        let countCarpetOnField = 0;
        let countMoney = 0;

        // countCarpet = document.getElementById(this.carpetsCountHTMLid).innerHTML;
        countCarpetOnField = document.getElementById(this.carpetsOnFieldHTMLid).innerHTML;
        countMoney = document.getElementById(this.gamerMoneyHTMLid).innerHTML;

        return 0 + countCarpetOnField + countMoney;
    }

    infoWin(massage) {
        document.getElementById(this.winHTML).innerHTML = massage;
    }

    hideArrows() {
        let element = document.getElementById('win');
        element.classList.add('hidden-win');
    }
}