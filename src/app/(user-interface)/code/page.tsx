import React from "react";
import * as motion from "motion/react-client";
import { PreziEmbedCode } from "@/components/user-interface/code/prezi-embed";

export default function CodePage() {
  return (
    <section className="max-w-7xl mx-auto pt-36 pb-24 space-y-12 px-4 font-Inter">
      {/* Heading */}
      <div className="flex flex-col gap-4 text-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="px-2 md:px-0 max-w-[80%] sm:max-w-4xl sm:mx-auto text-left sm:text-center text-4xl md:text-5xl lg:text-6xl leading-tight text-[#8F2F48] font-PTSerif italic font-extrabold"
        >
          CODE: Consulting for Organization and Development of Enterprises
        </motion.h1>
      </div>

      {/* Prezi Embed */}
      <div className="px-2 sm:px-4 lg:px-0 flex justify-center items-center">
        <PreziEmbedCode />
      </div>

      {/* What is CODE */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
        className="max-w-4xl mx-auto text-left space-y-6 text-[#2D2D2D] md:text-lg"
      >
        <h2 className="text-2xl md:text-3xl text-[#ae2333] font-PTSerif italic font-semibold">
          Breaking the CODE of Effective Enterprising
        </h2>
        <p>
          CODE is a socio-economic consulting framework designed to unlock
          hidden potential in enterprises by identifying invisible costs and
          inefficiencies. With over 45 years of research, it has been applied to
          2400 organizations across 45 countries and 72 sectors.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Focus on hidden costs not captured by traditional systems like
            budgeting or KPIs.
          </li>
          <li>
            Achieves ROI ranging from <strong>210% to 4014%</strong>, with
            payback periods under 2 months in most cases.
          </li>
          <li>
            Applicable to industries including healthcare, IT, food,
            engineering, and public services.
          </li>
        </ul>
      </motion.div>

      {/* 3 Axes */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
        className="max-w-4xl mx-auto text-left space-y-6 text-[#2D2D2D] md:text-lg"
      >
        <h2 className="text-2xl md:text-3xl text-[#ae2333] font-PTSerif italic font-semibold">
          The 3 Axes of CODE
        </h2>
        <ul className="list-decimal pl-5 space-y-2">
          <li>
            <strong>Change Axis:</strong> Diagnosis → Project → Evaluation.
            Involves tools like Time Management Grid, Competency Grid, and
            Priority Action Plans.
          </li>
          <li>
            <strong>Tools Axis:</strong> 6 integrated tools to measure time,
            competency, strategy alignment, and impact.
          </li>
          <li>
            <strong>Strategy Axis:</strong> Organizational design,
            product-market strategy, and HR development.
          </li>
        </ul>
      </motion.div>

      {/* Tools */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
        className="max-w-4xl mx-auto text-left space-y-6 text-[#2D2D2D] md:text-lg"
      >
        <h2 className="text-2xl md:text-3xl text-[#ae2333] font-PTSerif italic font-semibold">
          Key Tools of CODE
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Time Management Grid (TM):</strong> Analyzes how time is
            spent and identifies non-value-adding activities.
          </li>
          <li>
            <strong>Competency Grid (CG):</strong> Maps required vs. current
            skills every 6 months.
          </li>
          <li>
            <strong>Priority Action Plan (PAP):</strong> Annual and semi-annual
            plans that set and assign strategic actions.
          </li>
          <li>
            <strong>PNAC:</strong> Personal contract aligning employees with
            organizational strategy, reviewed bi-annually.
          </li>
          <li>
            <strong>IESAP:</strong> Long-term strategic plan (3–5 years) created
            by top leadership and fed by project insights.
          </li>
        </ul>
      </motion.div>

      {/* Performance Metric */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.8 }}
        className="max-w-4xl mx-auto text-left space-y-6 text-[#2D2D2D] md:text-lg"
      >
        <h2 className="text-2xl md:text-3xl text-[#ae2333] font-PTSerif italic font-semibold">
          Performance Metric
        </h2>
        <p>
          CODE uses a proprietary performance indicator to quantify the
          value-added by each working hour:
        </p>
        <div className="bg-[#F5F5F5] border-l-4 border-[#AE2333] p-4 rounded-md font-mono text-sm">
          (Revenues - Variable Costs) / Total Hours Worked
        </div>
        <p>
          This value highlights the human contribution embedded in each product
          or service, and helps monitor improvement after implementation.
        </p>
      </motion.div>
    </section>
  );
}
