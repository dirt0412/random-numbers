const ranking = new Ranking('#numbers-ranking');
ranking.init();

const fetchDisplay1 = new fetchDisplay('#fetch-display');
//fetchDisplay1.init();

refreshRandomNumbers();

function refreshRandomNumbers()
{
    setTimeout(function () {
        fetchDisplay1.init();
        ranking.init();
        this.refreshRandomNumbers();
        
    }, 10000);
}



