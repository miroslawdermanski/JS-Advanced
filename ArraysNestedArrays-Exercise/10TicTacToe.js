function ticTacToe(array){

    let dashboard = [[false, false, false],
                     [false, false, false], 
                     [false, false, false]]

    let curTurn = 0    
    let foundWinner = false  
    let player           
    for(let curMove = 0; curMove < array.length; curMove++){
        
        let curCommand = array[curMove].split(' ')
        let row = Number(curCommand.shift())
        let col = Number(curCommand.shift())
        let chosenField = dashboard[row][col]
        if(chosenField == false){

            player = curTurn % 2 == 0 ? 'X' : 'O'
            dashboard[row][col] = player

            // Check for a winner after every move
            if (checkWinner(dashboard, player)) {
                foundWinner = true
                if(foundWinner) break
            }
            if(curTurn == 8){
                break
            }                        

        } else {
            console.log("This place is already taken. Please choose another!");
            continue
        }

        curTurn++
    }

    if(foundWinner){
        console.log(`Player ${player} wins!`);
        
    } else {
        console.log("The game ended! Nobody wins :(");
    }
    dashboard.forEach(row => {
        console.log(row.join('\t'));
    }) 


    function checkWinner(board, player) {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
                return true;
            }
        }
        // Check columns
        for (let i = 0; i < 3; i++) {
            if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
                return true;
            }
        }
        // Check diagonals
        if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
            return true;
        }
        if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
            return true;
        }

        return false;
    }
}

ticTacToe(['0 1',
            '0 0',
            '0 2',
            '2 0',
            '1 0',
            '1 2',
            '1 1',
            '2 1',
            '2 2',
            '0 0'])

ticTacToe(["0 1",
            "0 0",
            "0 2", 
            "2 0",
            "1 0",
            "1 1",
            "1 2",
            "2 2",
            "2 1",
            "0 0"])

ticTacToe(["0 0",
            "0 0",
            "1 1",
            "0 1",
            "1 2",
            "0 2",
            "2 2",
            "1 2",
            "2 2",
            "2 1"])

ticTacToe(["0 1",
            "0 0",
            "0 2",
            "2 0",
            "1 0",
            "1 2",
            "1 1",
            "2 1",
            "2 2",
            "0 0"])            