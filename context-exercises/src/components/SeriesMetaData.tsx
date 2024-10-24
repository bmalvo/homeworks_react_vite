import { useSeriesContext } from "../context/useSeriesContext";

export const SeriesMetaData = () => {

    const context = useSeriesContext();

    if (!context) return null;

    const { start_date, end_date} = context;

    return <p>{start_date} to { end_date || 'still'}</p>;
}