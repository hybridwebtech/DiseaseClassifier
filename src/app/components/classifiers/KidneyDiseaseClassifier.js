export function kidneyFunctionCalculator( kidneyData )
{
    if (!Array.isArray(kidneyData))
    {
        return "Input data is not an array. Cannot compute GFR classification.";
    }

    if (kidneyData.length === 0)
    {
        return "Input array does not contain any data. Cannot compute GFR classification";
    }

    let sortedArray = kidneyData.sort( (a, b) => {
        let ad = new Date(a.atDate);
        let bd = new Date(b.atDate);
        return bd.getTime() - ad.getTime();
    } );

    return calculateLatestStatus( sortedArray )
        .join( checkForConsecutiveGFRDrops( sortedArray ) );
}

function calculateLatestStatus( sortedArray )
{
    var latestGFR = sortedArray[0];

    var latestClassification = "Kidney Failure";
    if ( latestGFR.eGFR >= 90 )
    {
        latestClassification = "Normal";
    }
    else if ( latestGFR.eGFR >= 60 && latestGFR.eGFR <= 89 )
    {
        latestClassification = "Mildly Decreased";
    }
    else if ( latestGFR.eGFR >= 45 && latestGFR.eGFR <= 59 )
    {
        latestClassification = "Mild to Moderate";
    }
    else if ( latestGFR.eGFR >= 30 && latestGFR.eGFR <= 44 )
    {
        latestClassification = "Moderate to Severe";
    }
    else if ( latestGFR.eGFR >= 15 && latestGFR.eGFR <= 29 )
    {
        latestClassification = "Severely Decreased";
    }

    let latestStatus = "Latest eGFR at " + latestGFR.atDate + " eGFR: " + latestGFR.eGFR + "; Classification: " + latestClassification;

    return [latestStatus];
}

function checkForConsecutiveGFRDrops( sortedArray )
{
    let statusArray = new Array();

    if ( sortedArray.length > 0 )
    {
        for ( var i = 1; i < sortedArray.length; i++ )
        {
            let prevReading = sortedArray[i - 1];
            let currReading = sortedArray[i];

            var deltaGFR = currReading.eGFR - prevReading.eGFR;

            var percentChange = (deltaGFR/sortedArray[i].eGFR)*100.0;

            if ( percentChange >= 20.0 )
            {
                statusArray.append( "Consecutive eGFR drop: " + percentChange + ", between " + prevReading.atDate + "(" + prevReading.eGFR +
                    ") and " + currReading.atDate + "(" + currReading.eGFR + ")" );
            }
        }
    }

    return statusArray;
}
