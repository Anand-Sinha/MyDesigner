import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Core, Viewer } from "@grapecity/activereports-react";
import "@grapecity/activereports/pdfexport";
import "@grapecity/activereports/htmlexport";
import "@grapecity/activereports/tabulardataexport";
import "@grapecity/activereports-localization";

function App() {
  const viewerRef = React.useRef(null);
  Core.setLicenseKey(
    "856515978924416#B1KZOQop6SlNmc9YDW8gGdMdTWCFnQvBlSQp5TwJkcwsyVS56NMpGTwYHVBNTd6N5NxFmZrUEewJUMz2kQOREOxMlMENlb4kmV5MjTRd4dF3mdyEzUVdjcMllSrUXMGRGWtRTdzU6dTRXV8MWN7hlajREUzcXYSd4Q8EkcwNVeURmZPlEMZZEav4WQzYUO0FkQzNGWpdVNnxUYysCaSJDOKNTerdHS95WN8lnbON6NLplZoJTaMpVcZpHSwcjcuVGZzw6aGhTSohFWy8UVrhVbqlVVWtEdXJXcWFkWFx4T8dEd4lza09UT6kVexlWU6tWV63mYO56dSBnU8tiQZl7LsJlNz5Gd9hmVQRFSyUFZC36dwMkI0IyUiwiIwEkQygTNFFjI0ICSiwiNzcTOzMTO6gTM0IicfJye#4Xfd5nIWx4SOJiOiMkIsISNWByUKRncvBXZSVmdpR7YBJiOi8kI1tlOiQmcQJCLiMDN4ETOwACMzQDM4IDMyIiOiQncDJCLiMXduMXdpN6cl5mLqwCcvRnLzVXajNXZt9iKs2WauMXdpN6cl5mLqwSbvNmLzVXajNXZt9iKsI7au26YuMXdpN6cl5mLqwCcq9ybj9yc5l6YzVWbuoiI0IyctRkIsIycrJXYQBCbl3mSiojIh94QiwiI6EDN4ITO8cTO5ETN6UDOiojIklkIs4XXbpjInxmZiwSZzxWYmpjIyNHZisnOiwmbBJye0ICRiwiI34TUVpUN9RkeMJWUsF4dBZDUBZHSyNDZ5wkTR9WWQJmYwxkNIJ4RNlnNpdTZIFWbkNWVLBjWypXOnV7SOVlNQNWSuRuN"
  );
  function onPreview(){
    viewerRef.current.Viewer.open("Report1.rdlx-json", {
        ResourceLocator: {
          getResource: async (resourceId) => {
            var reportUrl;
            switch (resourceId) {
              case "Report1.rdlx-json":
                reportUrl = "reports/Report1.rdlx-json";
                break;
              case "Report2.rdlx-json":
                reportUrl = "reports/Report2.rdlx-json";
                break;
              default:
                reportUrl = null;
                break;
            }
            if (reportUrl)
            {
              var reportJson = await fetch(reportUrl).then((data) => data.json());
              // Requirement 1: When the main report gets fetched adding subreport to merge the report.
              if (resourceId == "Report1.rdlx-json"){
                var section2 = {
                  "Type": "Continuous",
                  "Name": "ContinuousSection2",
                  "Page": {
                    "PageWidth": "8.5in",
                    "PageHeight": "11in",
                    "RightMargin": "1in",
                    "LeftMargin": "1in",
                    "TopMargin": "1in",
                    "BottomMargin": "1in",
                    "Columns": 1,
                    "ColumnSpacing": "0in"
                  },
                  "Width": "6in",
                  "Body": {
                    "Height": "2in",
                    "ReportItems": [
                      {
                        "Type": "subreport",
                        "Name": "MergingReport",
                        "ZIndex": 1,
                        "ReportName": "Report2.rdlx-json",
                        "Top": "0in",
                        "Width": "6.4903in",
                        "Height": "2in"
                      }
                    ]
                  }
                }
                
                reportJson.ReportSections.push(section2);
              }
 
              if (resourceId == "Report2.rdlx-json"){
                // Requirement 2: When the subReport gets fetched specify JSON value to the report JSON definition.
                reportJson.DataSources[0].ConnectionProperties.ConnectString = "jsondata=[{\"orderId\":11049,\"orderDate\":\"1998-04-24T00:00:00\",\"shipCountry\":\"Brazil\"},{\"orderId\":11050,\"orderDate\":\"1998-04-27T00:00:00\",\"shipCountry\":\"Sweden\"},{\"orderId\":11051,\"orderDate\":\"1998-04-27T00:00:00\",\"shipCountry\":\"France\"},{\"orderId\":11052,\"orderDate\":\"1998-04-27T00:00:00\",\"shipCountry\":\"Brazil\"},{\"orderId\":11053,\"orderDate\":\"1998-04-27T00:00:00\",\"shipCountry\":\"Austria\"},{\"orderId\":11054,\"orderDate\":\"1998-04-28T00:00:00\",\"shipCountry\":\"Argentina\"},{\"orderId\":11055,\"orderDate\":\"1998-04-28T00:00:00\",\"shipCountry\":\"Venezuela\"},{\"orderId\":11056,\"orderDate\":\"1998-04-28T00:00:00\",\"shipCountry\":\"UK\"},{\"orderId\":11057,\"orderDate\":\"1998-04-29T00:00:00\",\"shipCountry\":\"UK\"},{\"orderId\":11058,\"orderDate\":\"1998-04-29T00:00:00\",\"shipCountry\":\"Germany\"},{\"orderId\":11059,\"orderDate\":\"1998-04-29T00:00:00\",\"shipCountry\":\"Brazil\"},{\"orderId\":11060,\"orderDate\":\"1998-04-30T00:00:00\",\"shipCountry\":\"Italy\"},{\"orderId\":11061,\"orderDate\":\"1998-04-30T00:00:00\",\"shipCountry\":\"USA\"},{\"orderId\":11062,\"orderDate\":\"1998-04-30T00:00:00\",\"shipCountry\":\"Italy\"},{\"orderId\":11063,\"orderDate\":\"1998-04-30T00:00:00\",\"shipCountry\":\"Ireland\"},{\"orderId\":11064,\"orderDate\":\"1998-05-01T00:00:00\",\"shipCountry\":\"USA\"},{\"orderId\":11065,\"orderDate\":\"1998-05-01T00:00:00\",\"shipCountry\":\"Venezuela\"},{\"orderId\":11066,\"orderDate\":\"1998-05-01T00:00:00\",\"shipCountry\":\"USA\"},{\"orderId\":11067,\"orderDate\":\"1998-05-04T00:00:00\",\"shipCountry\":\"Germany\"},{\"orderId\":11068,\"orderDate\":\"1998-05-04T00:00:00\",\"shipCountry\":\"Brazil\"},{\"orderId\":11069,\"orderDate\":\"1998-05-04T00:00:00\",\"shipCountry\":\"Mexico\"},{\"orderId\":11070,\"orderDate\":\"1998-05-05T00:00:00\",\"shipCountry\":\"Germany\"},{\"orderId\":11071,\"orderDate\":\"1998-05-05T00:00:00\",\"shipCountry\":\"Venezuela\"},{\"orderId\":11072,\"orderDate\":\"1998-05-05T00:00:00\",\"shipCountry\":\"Austria\"},{\"orderId\":11073,\"orderDate\":\"1998-05-05T00:00:00\",\"shipCountry\":\"Mexico\"},{\"orderId\":11074,\"orderDate\":\"1998-05-06T00:00:00\",\"shipCountry\":\"Denmark\"},{\"orderId\":11075,\"orderDate\":\"1998-05-06T00:00:00\",\"shipCountry\":\"Switzerland\"},{\"orderId\":11076,\"orderDate\":\"1998-05-06T00:00:00\",\"shipCountry\":\"France\"},{\"orderId\":11077,\"orderDate\":\"1998-05-06T00:00:00\",\"shipCountry\":\"USA\"},{\"orderId\":11049,\"orderDate\":\"1998-04-24T00:00:00\",\"shipCountry\":\"Brazil\"},{\"orderId\":11050,\"orderDate\":\"1998-04-27T00:00:00\",\"shipCountry\":\"Sweden\"},{\"orderId\":11051,\"orderDate\":\"1998-04-27T00:00:00\",\"shipCountry\":\"France\"},{\"orderId\":11052,\"orderDate\":\"1998-04-27T00:00:00\",\"shipCountry\":\"Brazil\"},{\"orderId\":11053,\"orderDate\":\"1998-04-27T00:00:00\",\"shipCountry\":\"Austria\"},{\"orderId\":11054,\"orderDate\":\"1998-04-28T00:00:00\",\"shipCountry\":\"Argentina\"},{\"orderId\":11055,\"orderDate\":\"1998-04-28T00:00:00\",\"shipCountry\":\"Venezuela\"},{\"orderId\":11056,\"orderDate\":\"1998-04-28T00:00:00\",\"shipCountry\":\"UK\"},{\"orderId\":11057,\"orderDate\":\"1998-04-29T00:00:00\",\"shipCountry\":\"UK\"},{\"orderId\":11058,\"orderDate\":\"1998-04-29T00:00:00\",\"shipCountry\":\"Germany\"},{\"orderId\":11059,\"orderDate\":\"1998-04-29T00:00:00\",\"shipCountry\":\"Brazil\"},{\"orderId\":11060,\"orderDate\":\"1998-04-30T00:00:00\",\"shipCountry\":\"Italy\"},{\"orderId\":11061,\"orderDate\":\"1998-04-30T00:00:00\",\"shipCountry\":\"USA\"},{\"orderId\":11062,\"orderDate\":\"1998-04-30T00:00:00\",\"shipCountry\":\"Italy\"},{\"orderId\":11063,\"orderDate\":\"1998-04-30T00:00:00\",\"shipCountry\":\"Ireland\"},{\"orderId\":11064,\"orderDate\":\"1998-05-01T00:00:00\",\"shipCountry\":\"USA\"},{\"orderId\":11065,\"orderDate\":\"1998-05-01T00:00:00\",\"shipCountry\":\"Venezuela\"},{\"orderId\":11066,\"orderDate\":\"1998-05-01T00:00:00\",\"shipCountry\":\"USA\"},{\"orderId\":11067,\"orderDate\":\"1998-05-04T00:00:00\",\"shipCountry\":\"Germany\"},{\"orderId\":11068,\"orderDate\":\"1998-05-04T00:00:00\",\"shipCountry\":\"Brazil\"},{\"orderId\":11069,\"orderDate\":\"1998-05-04T00:00:00\",\"shipCountry\":\"Mexico\"},{\"orderId\":11070,\"orderDate\":\"1998-05-05T00:00:00\",\"shipCountry\":\"Germany\"},{\"orderId\":11071,\"orderDate\":\"1998-05-05T00:00:00\",\"shipCountry\":\"Venezuela\"},{\"orderId\":11072,\"orderDate\":\"1998-05-05T00:00:00\",\"shipCountry\":\"Austria\"},{\"orderId\":11073,\"orderDate\":\"1998-05-05T00:00:00\",\"shipCountry\":\"Mexico\"},{\"orderId\":11074,\"orderDate\":\"1998-05-06T00:00:00\",\"shipCountry\":\"Denmark\"},{\"orderId\":11075,\"orderDate\":\"1998-05-06T00:00:00\",\"shipCountry\":\"Switzerland\"},{\"orderId\":11076,\"orderDate\":\"1998-05-06T00:00:00\",\"shipCountry\":\"France\"},{\"orderId\":11077,\"orderDate\":\"1998-05-06T00:00:00\",\"shipCountry\":\"USA\"},{\"orderId\":11049,\"orderDate\":\"1998-04-24T00:00:00\",\"shipCountry\":\"Brazil\"},{\"orderId\":11050,\"orderDate\":\"1998-04-27T00:00:00\",\"shipCountry\":\"Sweden\"},{\"orderId\":11051,\"orderDate\":\"1998-04-27T00:00:00\",\"shipCountry\":\"France\"},{\"orderId\":11052,\"orderDate\":\"1998-04-27T00:00:00\",\"shipCountry\":\"Brazil\"},{\"orderId\":11053,\"orderDate\":\"1998-04-27T00:00:00\",\"shipCountry\":\"Austria\"},{\"orderId\":11054,\"orderDate\":\"1998-04-28T00:00:00\",\"shipCountry\":\"Argentina\"},{\"orderId\":11055,\"orderDate\":\"1998-04-28T00:00:00\",\"shipCountry\":\"Venezuela\"},{\"orderId\":11056,\"orderDate\":\"1998-04-28T00:00:00\",\"shipCountry\":\"UK\"},{\"orderId\":11057,\"orderDate\":\"1998-04-29T00:00:00\",\"shipCountry\":\"UK\"},{\"orderId\":11058,\"orderDate\":\"1998-04-29T00:00:00\",\"shipCountry\":\"Germany\"},{\"orderId\":11059,\"orderDate\":\"1998-04-29T00:00:00\",\"shipCountry\":\"Brazil\"},{\"orderId\":11060,\"orderDate\":\"1998-04-30T00:00:00\",\"shipCountry\":\"Italy\"},{\"orderId\":11061,\"orderDate\":\"1998-04-30T00:00:00\",\"shipCountry\":\"USA\"},{\"orderId\":11062,\"orderDate\":\"1998-04-30T00:00:00\",\"shipCountry\":\"Italy\"},{\"orderId\":11063,\"orderDate\":\"1998-04-30T00:00:00\",\"shipCountry\":\"Ireland\"},{\"orderId\":11064,\"orderDate\":\"1998-05-01T00:00:00\",\"shipCountry\":\"USA\"},{\"orderId\":11065,\"orderDate\":\"1998-05-01T00:00:00\",\"shipCountry\":\"Venezuela\"},{\"orderId\":11066,\"orderDate\":\"1998-05-01T00:00:00\",\"shipCountry\":\"USA\"},{\"orderId\":11067,\"orderDate\":\"1998-05-04T00:00:00\",\"shipCountry\":\"Germany\"},{\"orderId\":11068,\"orderDate\":\"1998-05-04T00:00:00\",\"shipCountry\":\"Brazil\"},{\"orderId\":11069,\"orderDate\":\"1998-05-04T00:00:00\",\"shipCountry\":\"Mexico\"},{\"orderId\":11070,\"orderDate\":\"1998-05-05T00:00:00\",\"shipCountry\":\"Germany\"},{\"orderId\":11071,\"orderDate\":\"1998-05-05T00:00:00\",\"shipCountry\":\"Venezuela\"},{\"orderId\":11072,\"orderDate\":\"1998-05-05T00:00:00\",\"shipCountry\":\"Austria\"},{\"orderId\":11073,\"orderDate\":\"1998-05-05T00:00:00\",\"shipCountry\":\"Mexico\"},{\"orderId\":11074,\"orderDate\":\"1998-05-06T00:00:00\",\"shipCountry\":\"Denmark\"},{\"orderId\":11075,\"orderDate\":\"1998-05-06T00:00:00\",\"shipCountry\":\"Switzerland\"},{\"orderId\":11076,\"orderDate\":\"1998-05-06T00:00:00\",\"shipCountry\":\"France\"},{\"orderId\":11077,\"orderDate\":\"1998-05-06T00:00:00\",\"shipCountry\":\"USA\"}]"

                // Requirement 3: Passing Authorization header when data gets fetched for SubReport
                reportJson.DataSets[1].Query.CommandText = "jpath=$.[*];Header$Authorization=test_authentication";
              }

              return reportJson;
            } 
          },
        },
    });
  }

  React.useEffect(()=>{
    onPreview();
  }, [])
  
  return (
      <div id="viewer-host">
        <Viewer ref={viewerRef}  />
      </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
