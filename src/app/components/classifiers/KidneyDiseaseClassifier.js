/**
 * Construct a kidney function summary, containing latest eGFR reading
 * plus a listing of all significant (>20%) drops in eGFR between consecutive readings
 * @param kidneyData - array of eGFR readings, format {eGFR: float, atDate: date string 'YYYY/MM/DD/'}
 * @returns Array<string> - the summary information
 */
export function kidneyFunctionCalculator( kidneyData )
{
    if (!Array.isArray(kidneyData))
    {
        return ['Input data is not an array. Cannot compute GFR classification.'];
    }

    if (kidneyData.length === 0)
    {
        return ['Input array does not contain any data. Cannot compute GFR classification'];
    }

    let statusArray = calculateLatestStatus( kidneyData );
    let dropArray = checkForConsecutiveGFRDrops( kidneyData );
    dropArray.forEach( (drop) => statusArray.push('\n' + drop) );

    return statusArray;
}

/**
 * Find the most recent eGFR reading and return it along with a classification of the eGFR value
 * @param kidneyData - array of eGFR readings, format {eGFR: float, atDate: date string 'YYYY/MM/DD/'}
 * @returns Array<string> - the summary information
 */
function calculateLatestStatus( kidneyData )
{
    const latestGFR = kidneyData[kidneyData.length - 1];

    let latestClassification = "Kidney Failure";
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

/**
 * Locate all consecutive eGFR records where there is a drop of more than 20% between records
 * @param kidneyData - array of eGFR readings, format {eGFR: float, atDate: date string 'YYYY/MM/DD/'}
 * @returns Array<string> - the summary information, one string value for each pair of consecutive eGFR
 * records with a drop in eGFR of 20% or more.
 */
function checkForConsecutiveGFRDrops( kidneyData )
{
    let statusArray = new Array();

    if ( kidneyData.length > 0 )
    {
        for ( let i = 1; i < kidneyData.length; i++ )
        {
            let prevReading = kidneyData[i - 1];
            let currReading = kidneyData[i];

            if ( prevReading.eGFR > 0)
            {
              let deltaGFR = currReading.eGFR - prevReading.eGFR;

              let percentChange = (deltaGFR / prevReading.eGFR) * 100.0;

              if ( percentChange <= -20.0 )
              {
                statusArray.push( "Consecutive eGFR drop: " + Math.abs( percentChange ).toPrecision( 2 ) + "%, between " +
                    prevReading.atDate + " (" + prevReading.eGFR + ") and " + currReading.atDate + " (" + currReading.eGFR + ")" );
              }
            }
        }
    }

    return statusArray;
}
