
interface StatisticsResponse {
   duration: "" | "" | "" | "" | string,
   season: "2010" | "2011" | "2012" | "2013" | "2014" | "2015" | "2016" | "2017" | "2018" | "2019" | string,
   value: number
 } 
  
interface ChartData {
  row: number,
  col: number,
  value: number
}

interface CellHighlight {
  row: number,
  col: number
}