import { useEffect, useState } from "react";
import { BarChart } from "react-native-chart-kit";
import { View, Dimensions } from "react-native";
import axios from "axios";

const FollowersBarChart = ({ data }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ data: [] }],
  });

  useEffect(() => {
    const fetchFollowers = async () => {
      const followersData = await Promise.all(
        data.map(async (user) => {
          const response = await axios.get(
            `https://api.github.com/users/${user.login}`
          );
          return response.data.followers;
        })
      );

      setChartData({
        labels: data.map((user) => user.login),
        datasets: [{ data: followersData }],
      });
    };

    fetchFollowers();
  }, [data]);

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <BarChart
        data={chartData}
        width={Dimensions.get("window").width - 40}
        height={300}
        yAxisLabel=""
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#eeeeee",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          barPercentage: 0.5,
          fillShadowGradient: "#007AFF",
          fillShadowGradientOpacity: 1,
        }}
        verticalLabelRotation={45}
        fromZero={true}
        showBarTops={false}
        showValuesOnTopOfBars={true}
        withInnerLines={false}
      />
    </View>
  );
};

export default FollowersBarChart;
