export function hypertensionCalculator( bpData )
{
    if (!Array.isArray(bpData))
    {
        return "Input data is not an array. Cannot compute BP classification.";
    }

    if (bpData.length === 0)
    {
        return "Input array does not contain any data. Cannot compute BP classification";
    }

    let sortedArray = bpData.sort( (a, b) => {
        let ad = new Date(a.atDate);
        let bd = new Date(b.atDate);
        return bd.getTime() - ad.getTime();
    } );

    let latestBP = sortedArray[0];

    let classification = "No Hypertension";

    if ( latestBP.SysBP >= 180 && latestBP.DiaBP >= 120 )
    {
        classification = "Stage 3";
    }
    else if ( (latestBP.SysBP >= 160 && latestBP.SysBP < 180) ||
              (latestBP.DiaBP >= 100 && latestBP.DiaBP < 100) )
    {
        classification = "Stage 2";
    }
    else if ( (latestBP.SysBP >= 140 && latestBP.SysBP < 160) ||
              (latestBP.DiaBP >= 90 && latestBP.DiaBP < 100) )
    {
        classification = "Stage 1";
    }

    return "Latest BP at " + latestBP.atDate + " Systolic:" + latestBP.SysBP + "; Diastolic: " + latestBP.DiaBP + "; Classification: " + classification ;
}
