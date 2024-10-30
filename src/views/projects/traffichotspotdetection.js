const TrafficHotspotDetection = () => {
    return (
        <div className="container my-5">
            <h1 className="display-5">Traffic Hotspot Detection Using K-Means and GMM Clustering</h1>
            
            {/* Project Overview */}
            <section className="my-5">
            <h2>Project Overview</h2>
            <p>
                The Traffic Hotspot Detection project analyzes traffic data within Auckland to identify congestion areas using clustering techniques like K-Means and Gaussian Mixture Models (GMM). This data-driven approach provides insights for urban planning, enabling better transportation infrastructure development and efficient traffic management.
            </p>
            </section>
    
            {/* Video Section */}
            <section className="my-5">
            <h2>Project Demo Video</h2>
            <div className="ratio ratio-16x9 border shadow" style={{ maxWidth: '80%', margin: '0 auto', height: '500px' }}>
                <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/c5FfI7-clAc"
                title="Traffic Hotspot Detection Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </div>
            </section>
    
            {/* Features and Benefits */}
            <section className="my-5">
            <h2>Key Features and Benefits</h2>
            <ul>
                <li>
                <strong>Data-Driven Insights:</strong> 
                Analyzes real-time and historical traffic data to identify high-congestion areas, helping urban planners make informed, proactive decisions.
                </li>
                <li>
                <strong>Advanced Clustering Algorithms:</strong> 
                Utilizes K-Means and GMM clustering techniques for precise identification of traffic hotspots, enhancing accuracy in determining congestion points.
                </li>
                <li>
                <strong>Power BI Visualizations:</strong> 
                The project includes interactive Power BI dashboards to visualize traffic patterns and hotspot locations, allowing stakeholders to explore data trends, peak traffic times, and problem areas.
                </li>
                <li>
                <strong>Enhanced Transportation Planning:</strong> 
                Provides insights to optimize infrastructure, reduce congestion, and improve commuter experience.
                </li>
            </ul>
            </section>
    
            {/* Technologies Used */}
            <section className="my-5">
            <h2>Technologies Used</h2>
            <p>This project combines machine learning and data visualization technologies to provide an impactful solution:</p>
            <ul>
                <li><strong>Programming Languages:</strong> Python, R</li>
                <li><strong>Machine Learning Libraries:</strong> scikit-learn, NumPy, pandas</li>
                <li><strong>Visualization Tools:</strong> Power BI for interactive dashboards, Matplotlib and Seaborn for static visualizations</li>
                <li><strong>Geolocation Analysis:</strong> GeoPandas for mapping traffic hotspots</li>
            </ul>
            </section>
    
            {/* Development and Testing */}
            <section className="my-5">
            <h2>Development and Testing</h2>
            <p>
                The project followed a structured approach, from data preprocessing and clustering model training to validation and visualization. Power BI was used for creating interactive dashboards, allowing users to explore traffic data dynamically. Models were validated for accuracy in hotspot identification, and results were visualized on geographical maps for easy interpretation.
            </p>
            </section>
    
            {/* Project Outcome */}
            <section className="my-5">
            <h2>Project Outcome</h2>
            <p>
                This project successfully identified high-congestion areas in Auckland, providing city planners with actionable insights through interactive Power BI dashboards. The visualizations facilitate deeper understanding of traffic patterns, guiding infrastructure decisions and optimizing resource allocation to alleviate congestion.
            </p>
            </section>
    
            {/* Links and Resources */}
            <section className="my-5">
            <h2>Links and Resources</h2>
            <p>
                GitHub Repository: <a href="https://github.com/butchdc/TrafficHotspotDetection" target="_blank" rel="noopener noreferrer">Traffic Hotspot Detection GitHub</a>
            </p>
            </section>
        </div>        
    );
}
 
export default TrafficHotspotDetection;