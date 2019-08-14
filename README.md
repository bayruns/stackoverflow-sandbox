# stackoverflow-sandbox
A repo for use as a sandbox for helping to answer stackoverflow questions.

<?php


    function getLifetimesAboveX(array $lifetimes, int $x): int {
        $above = 0;
        foreach($lifetimes as $lifetime){
            if($lifetime > $x){
                $above++;
            }
        }
        return $above;
    }

    function getLifetimesBelowX(array $lifetimes, int $x): int {
        $below = 0;
        foreach($lifetimes as $lifetime){
            if($lifetime < $x){
                $below++;
            }
        }
        return $below;
    }

    // t is number of months
    // ti is number of months at point i
    // di is number of users who stopped before i months
    // ni is number of people whose lifetimes are >= (i-1) months
    // product for every ti <= t
    function getSurvivalRate(array $lifetimes, int $months): float {
        var_dump("months: ".$months);
        $di = getLifetimesBelowX($lifetimes, $months);
        var_dump("di: ".$di);
        $ni = count($lifetimes) - $di;
        var_dump("ni: ".$ni);
        var_dump("rate: ". (1-($di/$ni)));
        return 1-($di/$ni);
    }

    function getAreaUnderSurvivalCurve(array $surviveRates, int $months): int {
        // area under s(t) = value * index+1
        $area = 0;
        for($i = $months; $i < count($surviveRates); $i++){
            $rate = $surviveRates[$i];
            var_dump("At ".$months.", ".($rate*100)."% chance of getting to ".($i+1));
            $area += ($i + 1) * $rate;
        }
        return $area;
        // foreach($surviveRates as $ndx => $rate){
        //     if($ndx )
        //     if(($ndx + 1) >= $months){
        //         return $area;
        //     }
        //     $area += ($ndx + 1) * $rate;
        // }
        // return $area;
    }

    // function getExpectedLifetime(array $surviveRates, int $monthsSoFar): float {
    //     $part1 =  1/$surviveRates[$monthsSoFar];
    //     $part2 = getAreaUnderSurvivalCurve($surviveRates, $monthsSoFar);
    //     return $part1*$part2;
    // }
    
    $maxLifetime = 30;
    $lifetimes = [1,1,1,2,3,4,5,5,6,7,8,9,10,11,12,13,14,15,16,16,16,17,17,18,19,20,21,22,23,24,25,26,27,27,28,29,30,30,30];

    $survivalRates = [];
    for($i = 0; $i < $maxLifetime; $i++){
        // $val = 1;
        // foreach($lifetimes as $lifetimeMonths){
        //     $val = $val * getSurvivalRate($lifetimes, $lifetimeMonths);
        // }
        $survivalRates[$i] = S($i);
    }
    var_dump(implode(",",$survivalRates));

    function S($t){
        global $lifetimes;
        return getLifetimesAboveX($lifetimes, $t)/count($lifetimes);
        // $val = 1;
        // for($ti = 0; $ti <= $t; $ti++){
        //     $di = getLifetimesBelowX($lifetimes, $ti);
        //     $ni = count($lifetimes) - $di;
        //     $val = $val * (1-($di/$ni));
        // }
        // return $val;
    }
    var_dump(S(10));
    function getExpectedLifetime($t0){
        global $survivalRates;
        $part1 =  1/(S($t0));
        var_dump($part1);
        $part2 = getAreaUnderSurvivalCurve($survivalRates, $t0);
        var_dump($part2);
        return $part1*$part2;
    }
    var_dump(getExpectedLifetime(10));


?>
