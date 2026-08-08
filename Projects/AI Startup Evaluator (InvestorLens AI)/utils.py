from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph

def generate_pdf(content):
    file = "report.pdf"
    doc = SimpleDocTemplate(file)

    elements = []
    elements.append(Paragraph(content))

    doc.build(elements)
    return file