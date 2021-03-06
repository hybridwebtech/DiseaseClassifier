/**
 * Locate the latest blood pressure reading (by date) and return an Array<string> containing the
 * latest reading along with a classification of the reading (No hypertension, Stage 1, Stage 2, Stage 3)
 * @param bpData - array of blood pressure readings, format {SysBP: number, DiaBP: number, atDate: date string 'YYYY/MM/DD/'}
 * where SysBP is the systolic reading, DiaBP is the diastolic reading.
 * @returns Array<string> containing the latest reading and a classification of the latest reading.
 */
export function hypertensionCalculator( bpData )
{
    if (!Array.isArray(bpData))
    {
        return ['Input data is not an array. Cannot compute BP classification.'];
    }

    if (bpData.length === 0)
    {
        return ['Input array does not contain any data. Cannot compute BP classification'];
    }

    let latestBP = bpData[bpData.length - 1];

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

    return "Latest BP at " + latestBP.atDate + " Systolic:" + latestBP.SysBP + "; Diastolic: "
           + latestBP.DiaBP + "; Classification: " + classification ;
}
