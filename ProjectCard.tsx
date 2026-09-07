import Image from "next/image";
import {
  ArrowDown,
  BriefcaseBusiness,
  Code2,
  Github,
  Globe2,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";

const timeline = [
  {
    year: "2013",
    title: "愛媛県で高校交換留学",
    text: "高校時代に帝京冨士高等学校へ交換留学。日本で生活し、異文化の中で関係を築く経験を得ました。",
  },
  {
    year: "2017–2019",
    title: "華城市役所｜兵役勤務",
    text: "許認可申請の受付、書類審査、来庁者対応、新人OJTを担当。外国人住民向け案内資料とフローチャートを整備しました。",
  },
  {
    year: "2020–2025",
    title: "立命館大学 政策科学部",
    text: "社会課題を調査・分析し、関係者を巻き込みながら改善へつなげる力を磨きました。",
  },
  {
    year: "2025–NOW",
    title: "日本アイ・ビー・エム デジタルサービス株式会社",
    text: "金融業界向けWebシステムの保守・運用開発に従事。技術と顧客コミュニケーションの両方を担当しています。",
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top">YJ PORTFOLIO</a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero container">
        <div className="hero-copy">
          <span className="pixel-label">PLAYER PROFILE</span>
          <p className="hero-kicker">Business × Technology × Global Communication</p>
          <h1>KIM<br />YONGJIN</h1>
          <p className="hero-description">
            技術とコミュニケーションをつなぎ、相手の課題を整理して、
            実際に使われる仕組みへ変えていくITスペシャリストです。
          </p>

          <div className="hero-meta">
            <span><BriefcaseBusiness size={18} /> IT Specialist</span>
            <span><MapPin size={18} /> Saitama, Japan</span>
            <span><Languages size={18} /> KR / JP / EN</span>
          </div>

          <div className="hero-actions">
            <a className="button primary" href="#experience">View Experience</a>
            <a className="button secondary" href="mailto:ehj8464@naver.com">
              <Mail size={18} /> Contact
            </a>
          </div>
        </div>

        <div className="profile-panel">
          <div className="window-bar">
            <span></span><span></span><span></span>
            <b>PROFILE.JPG</b>
          </div>
          <div className="photo-frame">
            <Image
              src="/profile.jpg"
              alt="Kim Yongjin"
              width={700}
              height={900}
              priority
            />
          </div>
          <div className="profile-stats">
            <div><span>ROLE</span><b>IT SPECIALIST</b></div>
            <div><span>STYLE</span><b>BUSINESS × TECH</b></div>
            <div><span>STATUS</span><b>OPEN TO GROWTH</b></div>
          </div>
        </div>

        <a href="#about" className="scroll-cue" aria-label="Scroll to About">
          <ArrowDown size={20} />
        </a>
      </section>

      <section id="about" className="section container">
        <SectionHeading
          eyebrow="ABOUT ME"
          title="韓国と日本を行き来しながら、課題解決の軸をつくってきました。"
          description="開発だけ、営業だけではなく、調査・調整・説明・実装をつなげられることが私の強みです。"
        />

        <div className="about-grid">
          <div className="story-card">
            <Globe2 size={30} />
            <h3>Global Journey</h3>
            <p>
              韓国で生まれ、高校時代に愛媛県へ交換留学。その後、韓国での大学生活と兵役勤務を経て、
              日本の立命館大学で政策科学を学びました。
            </p>
          </div>
          <div className="story-card">
            <Sparkles size={30} />
            <h3>Problem Solving</h3>
            <p>
              相手の声を聞き、課題を構造化し、関係者を巻き込みながら成果までやり切ることを大切にしています。
            </p>
          </div>
          <div className="story-card">
            <Code2 size={30} />
            <h3>Product Mindset</h3>
            <p>
              現職のIT実務に加えて、Goal LaboとSIer道場を自ら企画・開発・運営しています。
            </p>
          </div>
        </div>

        <div className="timeline">
          {timeline.map((item) => (
            <article key={item.year}>
              <div className="timeline-year">{item.year}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section container">
        <SectionHeading
          eyebrow="EXPERIENCE LOG"
          title="経験を、読みやすく。"
          description="職歴だけでなく、学生時代の実践経験も含めて、現在の強みにつながる形で整理しています。"
        />

        <div className="experience-grid">
          <ExperienceCard
            kicker="CURRENT ROLE"
            title="日本アイ・ビー・エム デジタルサービス株式会社"
            body="金融業界向けWebシステムのAMS（保守・運用）に従事しています。"
            points={[
              "Javaによる機能実装・画面改修、SQLによるデータ抽出・DB操作",
              "障害調査、ログ分析、DBパッチ適用、テスト仕様書作成",
              "顧客向け報告資料の作成と、調査結果の説明・関係者調整",
              "既存コードや過去事例を調査し、短期間で業務をキャッチアップ",
            ]}
            tags={["Java", "SQL", "DB2", "Linux", "Splunk", "Git"]}
            accent="blue"
          />

          <ExperienceCard
            kicker="BUSINESS MATCHING"
            title="韓国貿易公社（KOTRA）"
            body="大学在学中、日韓中小企業のビジネスマッチング支援と商談通訳を担当しました。"
            points={[
              "企業の事業内容と商談目的を事前整理",
              "経営者間のスケジュール調整と面談準備",
              "逐語訳だけでなく、意図や商習慣の違いを補足",
            ]}
            tags={["日韓通訳", "商談支援", "調整", "B2B"]}
            accent="yellow"
          />

          <ExperienceCard
            kicker="USER RESEARCH"
            title="立命館大学図書館"
            body="留学生の利用が少ない課題に対して、調査から改善施策まで主導しました。"
            points={[
              "多言語アンケートを設計し、Rで分析",
              "案内言語と認知不足を利用障壁として特定",
              "大学職員・学生・学外ボランティアを巻き込み5か国語ガイドを制作",
              "留学生の利用者数を34％増加",
            ]}
            tags={["R", "アンケート", "多言語", "34% UP"]}
            accent="green"
          />

          <ExperienceCard
            kicker="PUBLIC SERVICE"
            title="華城市役所（韓国）"
            body="兵役勤務として総務課に所属し、行政窓口と書類審査を担当しました。"
            points={[
              "許認可申請の受付・書類審査・システム入力",
              "来庁者への案内・相談対応",
              "外国人住民向け案内資料とフローチャートを整備",
              "新規職員へのOJTと研修資料作成",
            ]}
            tags={["行政対応", "書類審査", "OJT", "標準化"]}
            accent="purple"
          />
        </div>
      </section>

      <section id="projects" className="section container">
        <SectionHeading
          eyebrow="PROJECT SELECT"
          title="自分で企画し、つくり、運営する。"
          description="ユーザー体験・事業・技術の三つの視点から、Webサービスを形にしています。"
        />

        <div className="project-grid">
          <ProjectCard
            number="01"
            title="Goal Labo"
            description="海外サッカー情報サイト。企画、画面設計、開発、AWS環境構築、独自ドメインでの運営まで一貫して実施。勝敗予測やAI会話機能も実装しています。"
            tags={["Next.js", "TypeScript", "AWS", "Supabase", "AI API"]}
            href="https://goal-labo.com"
          />
          <ProjectCard
            number="02"
            title="SIer 道場"
            description="新入社員がSIer業務を疑似体験できる教育用Webゲーム。学習課題、UI、分岐シナリオ、Web実装まで企画しています。"
            tags={["Next.js", "TypeScript", "Phaser", "Game Design"]}
            href="https://sier-dojo.it.com"
          />
          <ProjectCard
            number="03"
            title="Stock Analysis Lab"
            description="テクニカル指標、予測モデル、バックテストを用いた株式分析の個人研究。"
            tags={["Python", "Pandas", "Backtest", "Machine Learning"]}
            status="RESEARCH"
          />
        </div>
      </section>

      <section className="section container">
        <SectionHeading
          eyebrow="SKILLS & BADGES"
          title="実務・開発・語学を横断するスキルセット。"
        />

        <div className="skills-layout">
          <div className="skill-groups">
            <article>
              <h3><Code2 size={21} /> IT & Development</h3>
              <div className="tag-list large">
                {["Java", "SQL", "DB2", "Linux", "Git", "Splunk", "Next.js", "TypeScript", "Supabase", "Nginx", "AWS"].map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
            <article>
              <h3><BriefcaseBusiness size={21} /> Business & Research</h3>
              <div className="tag-list large">
                {["顧客報告", "要件整理", "影響調査", "商談通訳", "関係者調整", "アンケート設計", "R分析"].map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
            <article>
              <h3><Languages size={21} /> Languages</h3>
              <div className="tag-list large">
                {["韓国語：Native", "日本語：JLPT N1", "英語：TOEFL iBT 97"].map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          </div>

          <div className="badge-panel">
            <span className="pixel-label">ACHIEVEMENTS</span>
            <div className="badge-item">
              <b>AWS</b>
              <span>Cloud Practitioner</span>
            </div>
            <div className="badge-item">
              <b>AWS</b>
              <span>AI Practitioner</span>
            </div>
            <div className="badge-item">
              <b>JLPT</b>
              <span>N1</span>
            </div>
            <div className="badge-item">
              <b>LANG</b>
              <span>KR / JP / EN</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-inner">
          <div>
            <span className="pixel-label">CONTACT</span>
            <h2>Let's connect.</h2>
            <p>
              ポートフォリオをご覧いただき、ありがとうございます。
              技術、サービス企画、グローバルなコミュニケーションに関するお話を歓迎します。
            </p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href="mailto:ehj8464@naver.com">
              <Mail size={18} /> ehj8464@naver.com
            </a>
            <a className="button secondary light" href="https://github.com/msuleu4-web" target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <span>KIM YONGJIN © 2026</span>
          <span>Built with Next.js + TypeScript</span>
        </div>
      </footer>
    </main>
  );
}
