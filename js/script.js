$(document).ready(function() {
    var draw_date_data = function() {
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable(date_data);
            var chart = new google.visualization.ColumnChart(document.getElementById('date_data'));
            chart.draw(data);
        }
    }

    var draw_country_data = function() {
        google.charts.load('upcoming', { 'packages': ['geochart'] });
        google.charts.setOnLoadCallback(drawRegionsMap);

        function drawRegionsMap() {

            var data = google.visualization.arrayToDataTable(country_data);

            var options = {};

            var chart = new google.visualization.GeoChart(document.getElementById('country_data'));

            chart.draw(data, options);
        }
    }

    var draw_gender_data = function() {
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {

            var data = google.visualization.arrayToDataTable(gender_data);

            var options = {
                title: 'Gender Analysis'
            };

            var chart = new google.visualization.PieChart(document.getElementById('gender_data'));

            chart.draw(data, options);
        }
    }

    var draw_keyword_data = function() {
        google.charts.load('current', { packages: ['corechart', 'bar'] });
        google.charts.setOnLoadCallback(drawBasic);

        function drawBasic() {

            var data = google.visualization.arrayToDataTable(keywords_data);

            var options = {
                title: 'Top Used Keywords',
                chartArea: { width: '50%' },
                hAxis: {
                    title: 'Total Tweets',
                    minValue: 0
                },
                vAxis: {
                    title: 'Keywords'
                }
            };

            var chart = new google.visualization.BarChart(document.getElementById('keywords_data'));

            chart.draw(data, options);
        }
    }

    var draw_language_data = function() {
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable(language_data);

            var options = {
                title: 'Languages',
                pieHole: 0.4,
            };

            var chart = new google.visualization.PieChart(document.getElementById('language_data'));
            chart.draw(data, options);
        }
    }

    var draw_profile_data = function() {

        google.charts.load('current', { packages: ['corechart', 'bar'] });
        google.charts.setOnLoadCallback(drawBasic);

        function drawBasic() {

            var data = google.visualization.arrayToDataTable(profile_data);

            var options = {
                title: 'Profile Data',
                chartArea: { width: '50%' },
                hAxis: {
                    title: 'Total Tweets',
                    minValue: 0
                },
                vAxis: {
                    title: 'Count'
                }
            };

            var chart = new google.visualization.BarChart(document.getElementById('profile_data'));

            chart.draw(data, options);
        }
    }

    var draw_profile_analytics_data = function() {
         google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable(profile_analytics_data);

            var options = {
                title: 'Profile Data Analysi',
                pieHole: 0.4,
            };

            var chart = new google.visualization.PieChart(document.getElementById('profile_analytics_data'));
            chart.draw(data, options);
        }
    }

    var draw_source_data = function() {
        google.charts.load('current', { packages: ['corechart', 'bar'] });
        google.charts.setOnLoadCallback(drawBasic);

        function drawBasic() {

            var data = google.visualization.arrayToDataTable(source_data);

            var options = {
                title: 'Sources',
                chartArea: { width: '50%' },
                hAxis: {
                    title: 'Total Tweets',
                    minValue: 0
                },
                vAxis: {
                    title: 'Source'
                }
            };

            var chart = new google.visualization.BarChart(document.getElementById('source_data'));

            chart.draw(data, options);
        }
    }

    var draw_time_data = function() {
        google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable(time_data);
            var chart = new google.visualization.ColumnChart(document.getElementById('time_data'));
            chart.draw(data);
        }
    }

    var init = function() {
        draw_date_data();
        draw_country_data();
        draw_gender_data();
        draw_keyword_data();
        draw_language_data();
        draw_profile_data();
        draw_profile_analytics_data();
        draw_source_data();
        draw_time_data();
    }

    init();
});
