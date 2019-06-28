export interface UserDashboardChartSettingsInterface {
    name: string;
    order: number;
    type: ChartTypes;
    dataType: string;
    valueType: ValueTypes;
}
export declare enum ChartTypes {
    Pie = "Pie",
    ColumnsHorizontal = "Columns Horizontal",
    PyramidsVertical = "Pyramids Vertical"
}
export declare enum ValueTypes {
    Sum = "Sum",
    Average = "Average",
    Maximum = "Maximum",
    Minimum = "Minimum"
}
