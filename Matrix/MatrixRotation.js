function rotateMatrix(arr) {
    let row = 0, col = 0;
    let m = arr.length, n= arr[0].length;
    let prev = null, current = null;

    while(row < m && col < n){
        if(row+1 == m || col+1 == n) {
            break;
        }

        prev = arr[row+1][col];

        for(let i = col ; i < n; i++){
          current = arr[row][i];
          arr[row][i] = prev;
          console.log(prev,current,"1st loop")
          prev = current;
        }
        row++;

        for(let j=row; j<m; j++){
            current = arr[j][n-1];
            arr[j][n-1] = prev;
            console.log(prev,current,"2nd loop")
            prev = current;
        }
        n--;

        if(row < m){
            for(let i = n-1; i>=col; i--){
                current = arr[m-1][i];
                arr[m-1][i] = prev;
                console.log(prev,current,"3rd loop")
                prev = current;
            }
            m--;
        }

        if(col < n){
            for(let i = m-1;i>=row; i--){
                current = arr[i][col];
                arr[i][col] = prev;
                console.log(prev,current,"4th loop")
                prev = current;
            }
            col++;
        }

    }

    for(let i = 0; i< arr.length; i++){
        for(let j = 0; j<arr[0].length; j++){
            console.log(arr[i][j])
        }
        console.log(" ")
    }
}

rotateMatrix([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20]
])
