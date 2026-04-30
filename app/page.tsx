import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="topbar">
        New Batches Starting May 6, 2026 | CSC Level 1 • CSC Level 2 • IFC • CIRE | $500 + Taxes
      </div>

      <header>
        <nav className="nav">
          <Link href="#home" className="brand">
            <div className="logo-mark" style={{ background: "none", overflow: "hidden" }}>
              <Image src="/logo.png" alt="VG Logo" width={42} height={42} className="object-cover" />
            </div>
            <span>
              Vipin Garg Finance Coaching <span>Canadian Finance Exam Coaching</span>
            </span>
          </Link>
          <div className="nav-links">
            <Link href="#courses" className="hidden-mobile">Courses</Link>
            <Link href="#exams-courses" className="hidden-mobile">Exams & Courses</Link>
            <Link href="#career-path" className="hidden-mobile">Career Path</Link>
            <Link href="#schedule" className="hidden-mobile">Schedule</Link>
            <Link href="#about" className="hidden-mobile">About</Link>
            <Link href="#contact" className="btn btn-primary">
              Enroll Now
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Canadian Finance Certification Coaching</div>
              <h1>Pass Your Finance Certification Exams With Expert Coaching</h1>
              <p className="lead">
                Live coaching for CSC Level 1, CSC Level 2, IFC, CIRE and LLQP — taught by a CFA Charterholder. 
                <strong> First class is a trial & orientation session</strong> to learn about certifications and career pathways.
              </p>
              <div className="hero-actions">
                <Link href="#contact" className="btn btn-primary">
                  Enroll for May 6 Batch
                </Link>
                <Link href="https://wa.me/17787922220" className="btn btn-outline" target="_blank">
                  Chat on WhatsApp
                </Link>
              </div>
              <div className="trust-row">
                <div className="trust-box">
                  $500 + Taxes <span>Affordable coaching</span>
                </div>
                <div className="trust-box">
                  Free Trial <span>Orientation first class</span>
                </div>
                <div className="trust-box">
                  CFA Charterholder <span>Expert-led coaching</span>
                </div>
                <div className="trust-box">
                  Career Focused <span>Exam + job readiness</span>
                </div>
              </div>
            </div>
            <div className="glass-card">
              <div className="batch-box">
                <h3>May 6, 2026 Intake</h3>
                <p>Course Fee: <strong>$500 + Taxes</strong></p>
                <ul className="check-list">
                  <li><strong>First Class:</strong> Trial & Orientation</li>
                  <li>Weekdays: 4 PM – 6 PM PST</li>
                  <li>Weekends: 10 AM – 12 Noon PST</li>
                </ul>
              </div>
              <h3>What You Get</h3>
              <ul className="check-list">
                <li>Live classes with practical explanation</li>
                <li>Coaching material and study support</li>
                <li>Exam strategy, revision and doubt-solving</li>
                <li>Career guidance for banking, investment, insurance and advisory roles</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="courses">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Courses Offered</div>
              <h2>Choose the certification path that fits your finance career goal</h2>
              <p className="lead">
                These programs help students, newcomers, banking employees, advisors and career switchers build
                credentials for Canadian finance roles.
              </p>
            </div>

            <div className="grid-4">
              <article className="course-card">
                <span className="tag">CSC</span>
                <h3>CSC Level 1 & Level 2</h3>
                <p>
                  Build a strong foundation in Canadian securities, financial markets, economics, fixed income,
                  equities, derivatives, portfolio management, mutual funds, ETFs, taxation and client relationships.
                </p>
                <ul>
                  <li>Best for banking and wealth roles</li>
                  <li>Separate Level 1 and Level 2 batches</li>
                  <li>Useful for investment advisory pathways</li>
                </ul>
                <Link href="#csc" className="btn btn-outline">
                  View CSC Page
                </Link>
              </article>

              <article className="course-card">
                <span className="tag green">IFC</span>
                <h3>Investment Funds in Canada</h3>
                <p>
                  Learn mutual funds, KYC, portfolio construction, investment products, mutual fund performance, fees,
                  ethics, compliance and regulation.
                </p>
                <ul>
                  <li>Best for mutual fund representative roles</li>
                  <li>100-question exam preparation</li>
                  <li>Practical examples included</li>
                </ul>
                <Link href="#ifc" className="btn btn-outline">
                  View IFC Page
                </Link>
              </article>

              <article className="course-card">
                <span className="tag sand">CIRE</span>
                <h3>Canadian Investment Regulatory Exam</h3>
                <p>
                  Prepare for regulatory framework, client relationships, complaint handling, market analysis, trade
                  execution, securities, derivatives, conflicts and ethics.
                </p>
                <ul>
                  <li>Focused regulatory exam coaching</li>
                  <li>110 MCQ format</li>
                  <li>Ideal for investment dealer pathways</li>
                </ul>
                <Link href="#cire" className="btn btn-outline">
                  View CIRE Page
                </Link>
              </article>

              <article className="course-card">
                <span className="tag">LLQP</span>
                <h3>Life License Qualification Program</h3>
                <p>
                  Prepare for life insurance licensing concepts including life insurance, accident and sickness
                  insurance, segregated funds, annuities, ethics and client needs analysis.
                </p>
                <ul>
                  <li>Best for insurance advisor careers</li>
                  <li>One-to-one support available</li>
                  <li>Exam strategy and revision</li>
                </ul>
                <Link href="#llqp" className="btn btn-outline">
                  View LLQP Page
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="section-blue" id="exams-courses">
          <div className="container">
            <div className="section-head center">
              <div className="eyebrow">Exams and Courses</div>
              <h2>Understand the certification landscape before choosing a course</h2>
              <p className="lead">
                Canadian finance credentials can lead to different tracks: investment advice, mutual funds, insurance,
                compliance, portfolio management, private banking and financial planning. Start with the right exam for
                your target role.
              </p>
            </div>

            <div className="grid-3">
              <article className="exam-card">
                <span className="tag">Licensing Courses</span>
                <h3>Core entry and licensing exams</h3>
                <p>
                  Common starting points include CSC, IFC and LLQP. CSI’s broader catalogue also lists licensing routes
                  for investment advisors, investment representatives, mutual funds, insurance, compliance, portfolio
                  management and training.
                </p>
                <ul>
                  <li>CSC for securities and investment careers</li>
                  <li>IFC for mutual fund representative pathways</li>
                  <li>LLQP for life insurance licensing pathways</li>
                  <li>CIRE for investment regulatory knowledge</li>
                </ul>
              </article>

              <article className="exam-card">
                <span className="tag green">Advanced Credentials</span>
                <h3>Certifications and designations</h3>
                <p>
                  After entry exams, professionals may build toward credentials such as PFP, CIM, CIWM, MTI and FCSI
                  depending on career direction.
                </p>
                <ul>
                  <li>PFP for comprehensive financial planning</li>
                  <li>CIM for discretionary portfolio management</li>
                  <li>CIWM for high-net-worth wealth management</li>
                  <li>FCSI as a senior industry recognition</li>
                </ul>
              </article>

              <article className="exam-card">
                <span className="tag sand">Course Library</span>
                <h3>Specialized knowledge areas</h3>
                <p>
                  CSI’s catalogue includes 200+ courses across securities, derivatives, trading, mutual funds, banking,
                  wealth management, estate and trust, compliance and continuing education.
                </p>
                <ul>
                  <li>Investment management and trading</li>
                  <li>Financial planning and insurance</li>
                  <li>Leadership, management and compliance</li>
                  <li>Wealth management and private banking</li>
                </ul>
              </article>
            </div>

            <div style={{ height: "28px" }}></div>

            <div className="exam-grid">
              <div className="schedule-card">
                <h3>Current coaching focus</h3>
                <p>For the May 6 intake, the coaching focus is on four high-demand pathways:</p>
                <ul className="check-list">
                  <li>
                    <strong>CSC Level 1:</strong> Foundation for Canadian securities and investment marketplace
                  </li>
                  <li>
                    <strong>CSC Level 2:</strong> Investment analysis, portfolio analysis, funds, ETFs, taxation and
                    clients
                  </li>
                  <li>
                    <strong>IFC:</strong> Mutual funds, KYC, client advice, regulation and ethics
                  </li>
                  <li>
                    <strong>CIRE:</strong> Regulatory framework, client relationships, market integrity and ethics
                  </li>
                </ul>
              </div>
              <div className="schedule-card">
                <h3>Suggested learning ladder</h3>
                <div className="career-map">
                  <div className="step">
                    <strong>Step 1</strong>
                    <span>Choose entry exam based on target role: CSC, IFC, CIRE or LLQP.</span>
                  </div>
                  <div className="step">
                    <strong>Step 2</strong>
                    <span>Build job readiness with practical examples, mock practice and interview talking points.</span>
                  </div>
                  <div className="step">
                    <strong>Step 3</strong>
                    <span>Upgrade later toward PFP, CIM, CIWM or compliance credentials based on career path.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="career-path">
          <div className="container">
            <div className="section-head center">
              <div className="eyebrow">Career Path</div>
              <h2>Map your certification to real finance careers in Canada</h2>
              <p className="lead">
                The right certification depends on whether you want to work in retail banking, mutual funds, securities,
                insurance, wealth management, compliance or portfolio management.
              </p>
            </div>

            <div className="timeline">
              <article className="timeline-card">
                <div className="stage">Retail Banking</div>
                <div>
                  <h3>FSR → Personal Banking Officer → Financial Advisor → Branch Manager</h3>
                  <p>
                    Common entry credentials include IFC or CSC for mutual fund and investment product knowledge. As
                    professionals progress, PFP or CFP-style planning credentials often become important for financial
                    planning roles.
                  </p>
                  <p>
                    <strong>Good starting point:</strong> IFC or CSC.
                  </p>
                </div>
              </article>

              <article className="timeline-card">
                <div className="stage">Mutual Funds</div>
                <div>
                  <h3>Mutual Fund Representative → Financial Consultant → Senior Advisor</h3>
                  <p>
                    This path focuses on mutual fund products, KYC, client suitability, portfolio construction, fees,
                    performance and ethics.
                  </p>
                  <p>
                    <strong>Good starting point:</strong> IFC, then advanced mutual fund or financial advice
                    credentials.
                  </p>
                </div>
              </article>

              <article className="timeline-card">
                <div className="stage">Securities & Wealth</div>
                <div>
                  <h3>
                    Investment Representative → Investment Advisor → Associate Portfolio Manager → Portfolio Manager
                  </h3>
                  <p>
                    This path is relevant for people who want to work with securities, ETFs, bonds, equities, portfolio
                    construction and client advisory. CSC is a common foundation, while advanced professionals may later
                    pursue CIM or CFA.
                  </p>
                  <p>
                    <strong>Good starting point:</strong> CSC Level 1 and Level 2.
                  </p>
                </div>
              </article>

              <article className="timeline-card">
                <div className="stage">Insurance</div>
                <div>
                  <h3>Insurance Advisor → Financial Planner → Wealth Advisor</h3>
                  <p>
                    This path is useful for candidates who want to advise on life insurance, accident and sickness
                    coverage, segregated funds, annuities and client protection planning.
                  </p>
                  <p>
                    <strong>Good starting point:</strong> LLQP.
                  </p>
                </div>
              </article>

              <article className="timeline-card">
                <div className="stage">Compliance & Regulation</div>
                <div>
                  <h3>Compliance Analyst → Branch Compliance Officer → CCO / Senior Compliance Leader</h3>
                  <p>
                    This path is relevant for candidates interested in regulatory obligations, KYC, suitability,
                    complaint handling, market integrity, conflicts of interest and ethical standards.
                  </p>
                  <p>
                    <strong>Good starting point:</strong> CIRE, CSC, IFC, then compliance-specific courses depending on
                    role.
                  </p>
                </div>
              </article>

              <article className="timeline-card">
                <div className="stage">Private Wealth</div>
                <div>
                  <h3>Associate Wealth Advisor → Private Banker → Wealth Manager → Family Office Advisor</h3>
                  <p>
                    This path combines investment knowledge, planning, tax awareness, estate planning, insurance and
                    high-net-worth client management. Advanced designations can include PFP, CIM, CIWM or estate and
                    trust credentials.
                  </p>
                  <p>
                    <strong>Good starting point:</strong> CSC or IFC, then planning and wealth credentials.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section-soft" id="schedule">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Batch Schedule</div>
              <h2>May 6, 2026 certification batches</h2>
              <p className="lead">
                Each certification batch includes 10 live sessions of 2 hours each. Evening and weekend options are
                designed for working professionals and students.
              </p>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Batch</th>
                    <th>Start Date</th>
                    <th>Sessions</th>
                    <th>Duration</th>
                    <th>Timing</th>
                    <th>Mode</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>CSC Level 1</strong>
                    </td>
                    <td>May 6, 2026</td>
                    <td>10</td>
                    <td>2 hours each</td>
                    <td>Weekdays 4–6 PM PST / Weekends 10 AM–12 Noon</td>
                    <td>
                      <span className="pill">Live Batch</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>CSC Level 2</strong>
                    </td>
                    <td>May 6, 2026</td>
                    <td>10</td>
                    <td>2 hours each</td>
                    <td>Weekdays 4–6 PM PST / Weekends 10 AM–12 Noon</td>
                    <td>
                      <span className="pill">Live Batch</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>IFC</strong>
                    </td>
                    <td>May 6, 2026</td>
                    <td>10</td>
                    <td>2 hours each</td>
                    <td>Weekdays 4–6 PM PST / Weekends 10 AM–12 Noon</td>
                    <td>
                      <span className="pill">Live Batch</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>CIRE</strong>
                    </td>
                    <td>May 6, 2026</td>
                    <td>10</td>
                    <td>2 hours each</td>
                    <td>Weekdays 4–6 PM PST / Weekends 10 AM–12 Noon</td>
                    <td>
                      <span className="pill">Live Batch</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container grid-2">
            <div className="about-box">
              <div className="eyebrow">About the Instructor</div>
              <h2>Learn from a CFA Charterholder with real finance and teaching experience</h2>
              <p>
                I am a CFA Charterholder, finance educator, and industry professional with over a decade of experience
                teaching finance subjects, mentoring certification candidates, and helping students and professionals
                understand capital markets, banking, investment products, regulatory frameworks and advisory practices.
              </p>
              <p>
                My coaching style is practical, exam-focused and career-oriented. I help students understand not just
                what to study, but how concepts apply in real banking, wealth management, insurance and investment
                advisory roles.
              </p>
            </div>
            <div>
              <h2>Why students choose this coaching</h2>
              <ul className="feature-list">
                <li>CFA Charterholder-led coaching</li>
                <li>Small batches and personal attention</li>
                <li>Practical explanations, not just theory</li>
                <li>Exam-focused structure and study planning</li>
                <li>Real career guidance for Canadian finance roles</li>
                <li>Suitable for students, newcomers, banking employees, advisors and career switchers</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-blue">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Delivery Methods</div>
              <h2>Flexible learning formats</h2>
            </div>
            <div className="grid-3">
              <div className="schedule-card">
                <h3>Live Online Batches</h3>
                <p>Structured weekly learning with live teaching, discussions, examples and exam-focused preparation.</p>
              </div>
              <div className="schedule-card">
                <h3>In-Person Coaching</h3>
                <p>
                  Available for learners in Greater Vancouver who prefer face-to-face support and guided study.
                </p>
              </div>
              <div className="schedule-card">
                <h3>One-to-One Coaching</h3>
                <p>
                  Personalized support for candidates who need targeted help, revision, confidence-building or
                  accelerated preparation.
                </p>
              </div>
              <div className="schedule-card">
                <h3>Weekend Classes</h3>
                <p>
                  Designed for working professionals who want certification preparation without disturbing weekday
                  schedules.
                </p>
              </div>
              <div className="schedule-card">
                <h3>Revision Bootcamps</h3>
                <p>
                  Focused review sessions for candidates close to exam date who need strategy, practice and topic
                  prioritization.
                </p>
              </div>
              <div className="schedule-card">
                <h3>Study Material Support</h3>
                <p>Coaching material, summaries and guided preparation support are included with the batch.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="csc">
          <div className="container">
            <div className="course-page-header">
              <div>
                <div className="eyebrow">CSC Coaching Page</div>
                <h2>CSC Level 1 & Level 2 Coaching for Banking and Investment Careers</h2>
                <p className="lead">
                  The Canadian Securities Course is one of the most recognized finance credentials in Canada. It is
                  useful for students, banking professionals, investment professionals, financial planners and anyone
                  looking to build a career in financial services.
                </p>
              </div>
              <div className="meta">SEO Title:<br />CSC Coaching in Canada | CSC Level 1 & Level 2 Exam Preparation</div>
            </div>

            <div className="grid-2">
              <div>
                <h3>CSC Level 1 Topics</h3>
                <ul className="module-list">
                  <li>Canadian investment marketplace</li>
                  <li>Economy</li>
                  <li>Fixed income</li>
                  <li>Equity securities</li>
                  <li>Derivatives</li>
                  <li>Corporations and financial statements</li>
                  <li>Financing and listing securities</li>
                </ul>
              </div>
              <div>
                <h3>CSC Level 2 Topics</h3>
                <ul className="module-list">
                  <li>Investment analysis</li>
                  <li>Portfolio analysis</li>
                  <li>Mutual funds</li>
                  <li>ETFs</li>
                  <li>Alternative investments</li>
                  <li>Canadian taxation</li>
                  <li>Fee-based accounts</li>
                  <li>Retail and institutional clients</li>
                </ul>
              </div>
            </div>
            <div className="actions">
              <Link href="#contact" className="btn btn-primary">
                Enroll in CSC May 6 Batch
              </Link>
            </div>
          </div>
        </section>

        <section className="section-soft page-section" id="ifc">
          <div className="container">
            <div className="course-page-header">
              <div>
                <div className="eyebrow">IFC Coaching Page</div>
                <h2>IFC Coaching for Mutual Fund and Financial Services Careers</h2>
                <p className="lead">
                  The Investment Funds in Canada course is designed for candidates who want to understand mutual funds,
                  client advisory, KYC, portfolio construction, mutual fund regulation, compliance, ethics and financial
                  planning basics.
                </p>
              </div>
              <div className="meta">SEO Title:<br />IFC Coaching in Canada | Investment Funds in Canada Exam Prep</div>
            </div>
            <h3>Key Topics</h3>
            <ul className="module-list">
              <li>Mutual fund marketplace</li>
              <li>KYC and client communication</li>
              <li>Investment products and portfolios</li>
              <li>Financial statements</li>
              <li>Mutual fund fees and services</li>
              <li>Mutual fund regulation</li>
              <li>Ethics and compliance</li>
              <li>Portfolio construction and risk-return analysis</li>
            </ul>
            <div className="actions">
              <Link href="#contact" className="btn btn-primary">
                Enroll in IFC May 6 Batch
              </Link>
            </div>
          </div>
        </section>

        <section className="page-section" id="cire">
          <div className="container">
            <div className="course-page-header">
              <div>
                <div className="eyebrow">CIRE Coaching Page</div>
                <h2>CIRE Coaching for Canadian Investment Dealer and Regulatory Roles</h2>
                <p className="lead">
                  CIRE focuses on Canadian investment regulation, client relationships, compliance, market integrity,
                  securities, derivatives, ethics and conflicts of interest.
                </p>
              </div>
              <div className="meta">
                SEO Title:<br />CIRE Coaching Canada | Canadian Investment Regulatory Exam Preparation
              </div>
            </div>
            <h3>Key Topics</h3>
            <ul className="module-list">
              <li>Canadian securities regulatory framework</li>
              <li>CIRO, CSA, FINTRAC, OSFI and related bodies</li>
              <li>Client onboarding and KYC</li>
              <li>Client complaints handling</li>
              <li>Market and company analysis</li>
              <li>Trade execution and settlement</li>
              <li>Securities, managed products, mutual funds and ETFs</li>
              <li>Derivatives</li>
              <li>Ethics and conflicts of interest</li>
            </ul>
            <div className="actions">
              <Link href="#contact" className="btn btn-primary">
                Enroll in CIRE May 6 Batch
              </Link>
            </div>
          </div>
        </section>

        <section className="section-soft page-section" id="llqp">
          <div className="container">
            <div className="course-page-header">
              <div>
                <div className="eyebrow">LLQP Coaching Page</div>
                <h2>LLQP Coaching for Life Insurance Licensing Careers</h2>
                <p className="lead">
                  LLQP is required for candidates who want to qualify for provincial life insurance licensing exams. It
                  helps build knowledge in life insurance, accident and sickness insurance, segregated funds, annuities,
                  ethics, professional practice, client needs analysis and insurance recommendations.
                </p>
              </div>
              <div className="meta">SEO Title:<br />LLQP Coaching Canada | Life Insurance Licensing Exam Preparation</div>
            </div>
            <h3>Key Topics</h3>
            <ul className="module-list">
              <li>Life insurance</li>
              <li>Accident and sickness insurance</li>
              <li>Segregated funds</li>
              <li>Annuities</li>
              <li>Ethics and professional practice</li>
              <li>Client needs analysis</li>
              <li>Insurance recommendations</li>
              <li>Insurance taxation principles</li>
            </ul>
            <div className="actions">
              <Link href="#contact" className="btn btn-primary">
                Ask About LLQP Coaching
              </Link>
            </div>
          </div>
        </section>

        <section id="insights">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Insights & Blog</div>
              <h2>SEO content ideas to build authority and generate leads</h2>
            </div>
            <div className="grid-4">
              <div className="blog-card">
                <h3>CSC vs IFC</h3>
                <p>Which finance certification should you choose in Canada?</p>
              </div>
              <div className="blog-card">
                <h3>Banking Career</h3>
                <p>How to start a career in banking in Canada.</p>
              </div>
              <div className="blog-card">
                <h3>CIRE Guide</h3>
                <p>What is CIRE and who needs it?</p>
              </div>
              <div className="blog-card">
                <h3>LLQP Path</h3>
                <p>How to become a life insurance advisor in Canada.</p>
              </div>
              <div className="blog-card">
                <h3>Newcomers</h3>
                <p>Best finance certifications for newcomers in Canada.</p>
              </div>
              <div className="blog-card">
                <h3>CSC Level 1</h3>
                <p>How to prepare for CSC Level 1 in 30 days.</p>
              </div>
              <div className="blog-card">
                <h3>IFC Exam</h3>
                <p>IFC exam guide for mutual fund careers.</p>
              </div>
              <div className="blog-card">
                <h3>Finance Jobs</h3>
                <p>Which certification helps with banking jobs in Canada?</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-soft" id="contact">
          <div className="container">
            <div className="cta-band">
              <div>
                <div className="eyebrow">Enroll Now</div>
                <h2>Ready to start your Canadian finance certification journey?</h2>
                <p>
                  Book a free consultation or reserve your seat for the May 6, 2026 batch. 
                  <strong> First class is a trial & orientation session.</strong>
                </p>
              </div>
              <div>
                <Link href="mailto:contact@vipingarg.com" className="btn btn-primary">
                  Email to Enroll
                </Link>
                <br />
                <br />
                <Link href="https://wa.me/17787922220" target="_blank" className="btn btn-outline">
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <h3>Vipin Garg Finance Coaching</h3>
            <p className="small">
              Expert-led coaching for Canadian finance certifications including CSC, IFC, CIRE and LLQP. Helping
              students and professionals build successful careers in Canadian banking, investments and insurance.
            </p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <Link href="#courses">Quick Courses</Link>
            <Link href="https://wa.me/17787922220" target="_blank">WhatsApp Chat</Link>
            <Link href="mailto:contact@vipingarg.com">Email Us</Link>
            <Link href="#contact">Enrollment Form</Link>
          </div>
          <div>
            <h3>Contact</h3>
            <p className="small">Email: contact@vipingarg.com</p>
            <p className="small">Phone: +1 778 792 2220</p>
            <p className="small">Location: Greater Vancouver, BC, Canada</p>
            <p className="small">© 2026 Vipin Garg Finance Coaching. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Link
        href="https://wa.me/17787922220"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </Link>
    </>
  );
}
