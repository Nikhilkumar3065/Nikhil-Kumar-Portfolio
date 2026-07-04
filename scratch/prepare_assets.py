import os
import shutil
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

client_dir = r"c:\Users\yusuf\OneDrive\Desktop\client"

def copy_assets():
    print("Migrating client assets...")
    
    # 1. Copy video
    src_video = os.path.join(client_dir, "animated mp4.mp4")
    dst_video = os.path.join(client_dir, "src", "assets", "hero video", "nikhil-hero.mp4")
    os.makedirs(os.path.dirname(dst_video), exist_ok=True)
    shutil.copy2(src_video, dst_video)
    print(f"Copied video to {dst_video}")
    
    # 2. Copy avatar
    src_avatar = os.path.join(client_dir, "animated image.png")
    dst_avatar = os.path.join(client_dir, "src", "assets", "about", "nikhil-avatar.png")
    os.makedirs(os.path.dirname(dst_avatar), exist_ok=True)
    shutil.copy2(src_avatar, dst_avatar)
    print(f"Copied avatar to {dst_avatar}")
    
    # 3. Copy certificate images to public
    src_cert1 = os.path.join(client_dir, "microsoft certifcate badge.png")
    dst_cert1 = os.path.join(client_dir, "public", "microsoft-cert.png")
    shutil.copy2(src_cert1, dst_cert1)
    
    src_cert2 = os.path.join(client_dir, "udemy full stack web dev certifcate.jpg")
    dst_cert2 = os.path.join(client_dir, "public", "udemy-cert.jpg")
    shutil.copy2(src_cert2, dst_cert2)
    print("Copied certificates to public folder.")

def build_pdf_resume():
    print("Building professional PDF resume...")
    pdf_path = os.path.join(client_dir, "public", "Obulshetty_Nikhil_Kumar_Resume.pdf")
    
    # Page setup
    margin = 36 # 0.5 inch margins for fitting everything cleanly on 1 page
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=margin,
        rightMargin=margin,
        topMargin=margin,
        bottomMargin=margin
    )
    
    styles = getSampleStyleSheet()
    
    # Color palette
    primary_color = colors.HexColor("#d97706") # Amber/Yellow highlight
    text_color = colors.HexColor("#1f2937") # Dark grey
    light_grey = colors.HexColor("#4b5563")
    
    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=26,
        textColor=primary_color,
        alignment=1 # Centered
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=light_grey,
        alignment=1 # Centered
    )
    
    sec_heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=primary_color,
        spaceBefore=8,
        spaceAfter=3
    )
    
    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=text_color,
        spaceAfter=3
    )
    
    bold_body_style = ParagraphStyle(
        'BoldBodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=text_color
    )
    
    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=text_color,
        leftIndent=15,
        firstLineIndent=-10,
        spaceAfter=2
    )

    story = []
    
    # 1. Header (Name & Contact)
    story.append(Paragraph("OBULSHETTY NIKHIL KUMAR", title_style))
    story.append(Spacer(1, 4))
    contact_text = "Hyderabad, Telangana | +91 8328391049 | obulshettynikhilkumar@gmail.com<br/>GitHub: github.com/Nikhilkumar3065 | LinkedIn: linkedin.com/in/obulshetty-nikhil-kumar-55b11831b"
    story.append(Paragraph(contact_text, subtitle_style))
    story.append(Spacer(1, 8))
    
    # Divider line
    divider = Table([[""]], colWidths=[540])
    divider.setStyle(TableStyle([
        ('LINEBELOW', (0,0), (-1,-1), 1, primary_color),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0)
    ]))
    story.append(divider)
    story.append(Spacer(1, 6))
    
    # 2. Professional Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", sec_heading_style))
    summary_text = "Motivated Computer Science and Engineering (AI & ML) student seeking an entry-level software role to apply programming, problem-solving, and analytical skills while continuously learning, growing professionally, and contributing to organizational success."
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 6))
    
    # Divider line
    story.append(divider)
    story.append(Spacer(1, 6))
    
    # 3. Technical Skills
    story.append(Paragraph("TECHNICAL SKILLS", sec_heading_style))
    skills_data = [
        [Paragraph("Programming Languages:", bold_body_style), Paragraph("C, Python, Java", body_style)],
        [Paragraph("Web Technologies:", bold_body_style), Paragraph("HTML, CSS, JavaScript, Bootstrap", body_style)],
        [Paragraph("Frameworks:", bold_body_style), Paragraph("Flask", body_style)],
        [Paragraph("Databases:", bold_body_style), Paragraph("SQL, RDBMS, MySQL, SQLite", body_style)],
        [Paragraph("AI/ML Fundamentals:", bold_body_style), Paragraph("Machine Learning, Computer Vision, Generative AI", body_style)],
        [Paragraph("Tools & Platforms:", bold_body_style), Paragraph("GitHub, VS Code, AWS", body_style)]
    ]
    skills_table = Table(skills_data, colWidths=[130, 410])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0)
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 6))
    
    # Divider line
    story.append(divider)
    story.append(Spacer(1, 6))
    
    # 4. Experience
    story.append(Paragraph("WORK EXPERIENCE", sec_heading_style))
    exp_header = Table([
        [Paragraph("<b>Codegnan IT Solutions</b>", bold_body_style), Paragraph("<font color='#4b5563'>Jan 2026 – Present</font>", ParagraphStyle('R', parent=body_style, alignment=2))],
        [Paragraph("<i>Python Full Stack Trainee</i>", body_style), Paragraph("<i>Hyderabad, India</i>", ParagraphStyle('R2', parent=body_style, alignment=2))]
    ], colWidths=[350, 190])
    exp_header.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0)
    ]))
    story.append(exp_header)
    story.append(Spacer(1, 4))
    story.append(Paragraph("• Undergoing comprehensive training in Python Full Stack Development with hands-on web application experience.", bullet_style))
    story.append(Paragraph("• Practicing Data Structures and Algorithms to strengthen core problem-solving and analytical capabilities.", bullet_style))
    story.append(Paragraph("• Gaining exposure to modern software engineering workflows, version control with GitHub, and Generative AI fundamentals.", bullet_style))
    story.append(Spacer(1, 6))
    
    # Divider line
    story.append(divider)
    story.append(Spacer(1, 6))
    
    # 5. Projects
    story.append(Paragraph("ACADEMIC PROJECTS", sec_heading_style))
    
    # Project 1
    p1_header = Table([
        [Paragraph("<b>Multilingual Story Generation and Speech System</b>", bold_body_style), Paragraph("<font color='#4b5563'>Python, TensorFlow, Scikit-learn</font>", ParagraphStyle('R', parent=body_style, alignment=2))]
    ], colWidths=[350, 190])
    p1_header.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0)
    ]))
    story.append(p1_header)
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Developed an AI-based system to generate multilingual stories from keywords using transformer-based models.", bullet_style))
    story.append(Paragraph("• Applied Natural Language Processing (NLP) techniques for keyword parsing, structuring story outlines, and text-to-speech rendering.", bullet_style))
    story.append(Paragraph("• Explored AI applications in automated content creation, speech systems, and multilingual language learning structures.", bullet_style))
    story.append(Spacer(1, 4))
    
    # Project 2
    p2_header = Table([
        [Paragraph("<b>SmartCart – E-Commerce Web Application</b>", bold_body_style), Paragraph("<font color='#4b5563'>Python, Flask, MySQL, JS, Bootstrap</font>", ParagraphStyle('R', parent=body_style, alignment=2))]
    ], colWidths=[350, 190])
    p2_header.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0)
    ]))
    story.append(p2_header)
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Developed a full-stack e-commerce web platform featuring user authentication, product catalogs, shopping carts, and checkout integrations.", bullet_style))
    story.append(Paragraph("• Designed a responsive front-end UI using HTML5, CSS3, JavaScript, and Bootstrap to ensure mobile and desktop friendliness.", bullet_style))
    story.append(Paragraph("• Integrated a robust MySQL database to manage product listings, user account data, order histories, and cart states securely.", bullet_style))
    story.append(Spacer(1, 4))
    
    # Project 3
    p3_header = Table([
        [Paragraph("<b>Notes Management System</b>", bold_body_style), Paragraph("<font color='#4b5563'>Python, Flask, SQLite, HTML, CSS</font>", ParagraphStyle('R', parent=body_style, alignment=2))]
    ], colWidths=[350, 190])
    p3_header.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0)
    ]))
    story.append(p3_header)
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Created a web-based note editor application allowing users to perform full CRUD operations (Create, Read, Update, Delete) on notes.", bullet_style))
    story.append(Paragraph("• Structured secure user authentication and session management to allow users to save notes independently and securely.", bullet_style))
    story.append(Paragraph("• Utilized SQLite for database storage and retrieval, ensuring lightweight, fast, and local database deployment.", bullet_style))
    story.append(Spacer(1, 6))
    
    # Divider line
    story.append(divider)
    story.append(Spacer(1, 6))
    
    # 6. Education
    story.append(Paragraph("EDUCATION", sec_heading_style))
    
    edu_data = [
        [
            Paragraph("<b>Malla Reddy Engineering College</b>", bold_body_style),
            Paragraph("B.Tech in Computer Science (AI & ML)", body_style),
            Paragraph("CGPA: 7.1 / 10", body_style),
            Paragraph("<font color='#4b5563'>2023 – 2026</font>", ParagraphStyle('R', parent=body_style, alignment=2))
        ],
        [
            Paragraph("<b>TRR College of Technology</b>", bold_body_style),
            Paragraph("Diploma in Computer Science Engineering", body_style),
            Paragraph("CGPA: 6.59 / 10", body_style),
            Paragraph("<font color='#4b5563'>2020 – 2023</font>", ParagraphStyle('R', parent=body_style, alignment=2))
        ],
        [
            Paragraph("<b>Newgen School of Excellence</b>", bold_body_style),
            Paragraph("Secondary School Certificate (SSC)", body_style),
            Paragraph("CGPA: 9.5 / 10", body_style),
            Paragraph("<font color='#4b5563'>2019 – 2020</font>", ParagraphStyle('R', parent=body_style, alignment=2))
        ]
    ]
    edu_table = Table(edu_data, colWidths=[150, 200, 100, 90])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0)
    ]))
    story.append(edu_table)
    story.append(Spacer(1, 6))
    
    # Divider line
    story.append(divider)
    story.append(Spacer(1, 6))
    
    # 7. Activities & Certifications
    story.append(Paragraph("ACTIVITIES & CERTIFICATIONS", sec_heading_style))
    story.append(Paragraph("• <b>Microsoft Certified:</b> Azure AI Fundamentals (Certificate Badge Earned)", bullet_style))
    story.append(Paragraph("• <b>Udemy:</b> Full Stack Web Development Boot Camp (Certificate of Completion)", bullet_style))
    story.append(Paragraph("• <b>Vishesh-2023:</b> Participated in Project Expo, exhibiting a Greenhouse Environment system simulation.", bullet_style))
    story.append(Paragraph("• <b>TechTickle Hackathon:</b> Engaged in collaborative AI problem solving organized by the AIML Community at MREC.", bullet_style))

    doc.build(story)
    print("PDF Resume created successfully!")

if __name__ == "__main__":
    copy_assets()
    build_pdf_resume()
