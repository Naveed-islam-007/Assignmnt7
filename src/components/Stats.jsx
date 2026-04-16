import { useContext } from 'react';
import { FriendContext } from './Context/Context';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const Analytics = () => {
    const data = useContext(FriendContext);
    const FriendChosen = data.FriendChosen;

    const textCount = FriendChosen.filter((f) => f.type === 'Text').length;
    const callCount = FriendChosen.filter((f) => f.type === 'Call').length;
    const videoCount = FriendChosen.filter((f) => f.type === 'Video').length;

    const chartData = [
        { name: "Text", value: textCount, color: "#8B5CF6" },
        { name: "Call", value: callCount, color: "#2D4B3B" },
        { name: "Video", value: videoCount, color: "#4ADE80" },
    ];

    return (
        <div className="container mx-auto w-3/4 py-8">

            <div className="shadow-md rounded-lg p-8 bg-white">
                <h2 className="text-3xl font-bold mb-6">Friendship Analytics</h2>

                <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={chartData}
                                dataKey="value"
                                outerRadius={120}
                                innerRadius={80}
                            >
                                {chartData.map((item, index) => (
                                    <Cell key={index} fill={item.color} />
                                ))}
                            </Pie>

                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    );
};

export default Analytics;