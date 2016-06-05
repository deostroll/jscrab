function BonusesLayout()
{
    var self = this;
    self.boardm = [];
    self.init = function(bx, by)
    {
        self.bx = bx;
        self.by = by;

        var i,j;
        for (i=0; i<bx; i++) {
            self.boardm[i] = [];
            for (j=0; j<by; j++)
                self.boardm[i][j] = 0;
        }

        var midx = Math.floor(bx/2);
        var midy = Math.floor(by/2);
    
        self.setquad(0, 0, 4);
        self.setquad(midx, 0, 4);
        self.setquad(0, midy, 4);

        self.setquad(3, 0, 1);
        self.setquad(0, 3, 1);
        self.setquad(6, 2, 1);
        self.setquad(2, 6, 1);

        self.setquad(7, 3, 1);
        self.setquad(3, 7, 1);
        self.setquad(6, 6, 1);


        self.setquad(5, 5, 2);
        self.setquad(5, 5, 2);
        self.setquad(5, 1, 2);
        self.setquad(1, 5, 2);

        for(var i = 1; i < midx - 2; i++) {
          self.setquad(i, i, 3);
        }



        return self.boardm;
    };

    self.setquad = function(x, y, s)
    {
        var x1 = x;
        var y1 = y;
        var x2 = self.bx - x - 1;
        var y2 = self.by - y - 1;
        //logit([x1,y1,x2,y2]);
        self.boardm[x1][y1] = s;
        self.boardm[x1][y2] = s;
        self.boardm[x2][y1] = s;
        self.boardm[x2][y2] = s;
    };
}

var g_boardm = new BonusesLayout();
