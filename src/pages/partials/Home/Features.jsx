import React, { useState } from "react";
import InfoCard from "../../../components/InfoCard";
import styles from "../../../styles/Features.module.css";

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState("default");

  const featureContent = {
    default: {
      title: "Custom Reports",
      description: "Make smart financial decisions with tailored reports.",
      imageURL: "https://consultoresinternacionales.org/img/reunion.gif",
    },
    "flexible-date": {
      title: "Flexible Date Filters",
      description:
        "Generate reports for any specific day, week, month, year, or custom range. Use our intuitive date picker to select exactly the time period you need.",
      imageURL:
        "https://cdn.dribbble.com/users/883236/screenshots/4572188/attachments/1033984/date-filter-animation.gif",
    },
    "category-tag": {
      title: "Category & Tag Filters",
      description:
        "Break down your expenses by category, payment method, or custom tags. Create detailed breakdowns of your spending patterns.",
      imageURL:
        "https://files.helpdocs.io/Ytt2uahFxY/articles/zd8v6jlyle/1683204178621/filtering-data-by-category-and-that-includes-all-subcategory-data-low.gif",
    },
    "smart-summaries": {
      title: "Smart Summaries",
      description:
        "Instantly see totals for expenses, income, and balance based on your filters. Get quick insights at a glance.",
      imageURL:
        "https://blog.xero.com/wp-content/uploads/2023/10/Track-and-markup-expenses.gif",
    },
    "visual-insights": {
      title: "Visual Insights",
      description:
        "Interactive charts and graphs help you analyze spending trends over time. Visualize your financial data with beautiful charts.",
      imageURL:
        "https://cdn.dribbble.com/users/3083633/screenshots/8258363/full-analysis.gif",
    },
    "transaction-view": {
      title: "Automatic Transaction View",
      description:
        "All filtered transactions are shown instantly below your report—no extra clicks needed. See detailed transaction lists automatically.",
      imageURL:
        "https://images.idgesg.net/images/article/2017/10/01-a-basic-flat-file-spreadsheet-database-100739687-orig.jpg",
    },
    "export-share": {
      title: "Export & Share",
      description:
        "Download or share customized reports in PDF, Excel, or via secure links. Share insights with your team or accountant.",
      imageURL:
        "https://freeagent-res.cloudinary.com/image/upload/c_limit,w_1000/dpr_auto,f_auto/website-images/netlify/blog__export-data__export-data-og.gif",
    },
  };

  return (
    <section aria-labelledby="features-heading">
      <h1 id="features-heading" className={styles.heading}>
        Key Features
      </h1>
      <p className={styles.subheading}>
        Take control of your financial insights with powerful, flexible
        reporting. Filter and view your expenses exactly how you need—by day,
        month, year, or a custom date range.
      </p>

      <div
        className={styles.imageContainer}
        style={{
          backgroundImage: featureContent[selectedFeature].imageURL
            ? `url(${featureContent[selectedFeature].imageURL})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={styles.placeholder}>
          <p>{featureContent[selectedFeature].title}</p>
          <small>{featureContent[selectedFeature].description}</small>
        </div>
      </div>

      <div className={styles.grid3x2}>
        <article>
          <InfoCard
            title="Flexible Date Filters"
            description="Generate reports for any specific day, week, month, year, or custom range."
            onClick={() => setSelectedFeature("flexible-date")}
          />
        </article>
        <article>
          <InfoCard
            title="Category & Tag Filters"
            description="Break down your expenses by category, payment method, or custom tags."
            onClick={() => setSelectedFeature("category-tag")}
          />
        </article>
        <article>
          <InfoCard
            title="Smart Summaries"
            description="Instantly see totals for expenses, income, and balance based on your filters."
            onClick={() => setSelectedFeature("smart-summaries")}
          />
        </article>
        <article>
          <InfoCard
            title="Visual Insights"
            description="Interactive charts and graphs to help you analyze spending trends over time."
            onClick={() => setSelectedFeature("visual-insights")}
          />
        </article>
        <article>
          <InfoCard
            title="Automatic Transaction View"
            description="All filtered transactions are shown instantly below your report—no extra clicks needed."
            onClick={() => setSelectedFeature("transaction-view")}
          />
        </article>
        <article>
          <InfoCard
            title="Export & Share"
            description="Download or share customized reports in PDF, Excel, or via secure links."
            onClick={() => setSelectedFeature("export-share")}
          />
        </article>
      </div>
    </section>
  );
};

export default Features;
