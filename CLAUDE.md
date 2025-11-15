# CLAUDE.md - AI Assistant Guide

## Repository Overview

**Repository**: `jennirumery/data`
**Purpose**: User research data repository for TranscribeAI (veterinary medical transcription AI tool)
**Type**: Research data documentation and analysis
**Primary Content**: User interviews, UX analysis, and synthesized feedback from veterinary practices

This repository stores qualitative research data from veterinary practice users testing TranscribeAI, an AI-powered transcription tool designed for veterinary SOAP (Subjective, Objective, Assessment, Plan) notes.

## Repository Structure

```
/
├── README.md                                    # Basic repository description
├── deep_synthesis_ux_teardown_plus_interviews.md  # UX analysis merged with user interviews
├── user_interviews_themed_excerpts.md          # Themed excerpts organized by topic
└── CLAUDE.md                                   # This file - AI assistant guidance
```

### File Descriptions

**deep_synthesis_ux_teardown_plus_interviews.md**
- Comprehensive synthesis document merging structured UX teardown with insights from 12 user interviews (Oct-Nov 2025)
- Organized by theme/pain point categories
- Contains representative interview excerpts, impact assessments, and recommended actions
- Key themes: Duplicate Entry, Scheduling, Portal/Uploads, Placement/PE, Dictation/Voice, AI Accuracy, Performance, EchoAI/Summary, SOAP, TranscribeAI

**user_interviews_themed_excerpts.md**
- Curated excerpts from user interviews organized by theme
- Same thematic organization as the synthesis document
- Shorter, more focused snippets for quick reference
- Useful for identifying patterns across multiple user feedback sessions

## Key Domain Concepts

### TranscribeAI Product Context
TranscribeAI is a veterinary-specific AI transcription tool that:
- Records veterinarian-client conversations during exam room visits
- Automatically generates SOAP notes from transcribed audio
- Integrates with veterinary Practice Information Management Systems (PIMS)
- Processes physical exam findings, vitals, assessments, and treatment plans

### Common Terms
- **SOAP**: Subjective, Objective, Assessment, Plan - standard veterinary medical record format
- **PE**: Physical Exam
- **PIMS**: Practice Information Management System
- **Quick SOAP**: Abbreviated SOAP notes format for technician-only visits
- **EchoAI**: AI summarization feature (beta)
- **DiagnoseAI**: AI diagnostic assistance feature
- **Fear Free**: Veterinary approach focused on reducing pet stress

### Interview Participants
Interviews were conducted with:
- Veterinarians (DVMs)
- Veterinary technicians
- Practice managers/administrators
- Practice owners

Across multiple veterinary practices in various locations (WA, IL, and other US states).

## Data Organization Conventions

### Interview Data Format
Interview excerpts follow this pattern:
- **Source identifier**: Session name with participant and unique ID hash
- **Quote/excerpt**: Brief text snippet from interview
- **Context**: Background information about the practice, workflow, or specific issue

### Thematic Categories
Research data is organized into these primary themes:
1. **Duplicate Entry** - Redundant data entry across fields
2. **Scheduling/Calendar** - Appointment booking and management
3. **Portal/Uploads** - Document uploads and client portal functionality
4. **Placement/PE** - Physical exam data placement in records
5. **Dictation/Voice** - Voice recording and transcription quality
6. **AI Accuracy/Quality** - AI output accuracy and reliability
7. **Performance/Timeout** - Processing speed and system responsiveness
8. **EchoAI/Summary** - AI summarization features
9. **SOAP** - SOAP note formatting and structure
10. **TranscribeAI** - General product feedback and usage

### Document Structure Pattern
Each theme section typically includes:
- **Representative interview excerpts** - Relevant quotes/snippets
- **Impact if addressed** - Expected benefits of resolving the issue
- **Recommended actions** - Specific product improvements suggested

## Development Workflows

### Adding New Interview Data

When adding new user research data:

1. **Conduct interview/research session**
   - Record session with participant consent
   - Note participant role, practice name, location, date
   - Generate unique session identifier

2. **Process and anonymize data**
   - Extract relevant quotes and insights
   - Use anonymous identifiers (hash codes) for participants
   - Remove any personally identifiable information (PII)
   - Maintain practice names only if authorized

3. **Organize by theme**
   - Categorize excerpts into existing thematic buckets
   - Add new themes if patterns emerge that don't fit existing categories
   - Include sufficient context for each excerpt

4. **Update synthesis document**
   - Add excerpts to `deep_synthesis_ux_teardown_plus_interviews.md`
   - Update impact assessments and recommended actions
   - Ensure thematic sections remain cohesive

5. **Update themed excerpts**
   - Add curated snippets to `user_interviews_themed_excerpts.md`
   - Keep excerpts concise and focused
   - Maintain parallel structure with synthesis document

### Git Workflow

**Branch Naming Convention**:
- Development branches: `claude/claude-md-<session-id>`
- Feature branches: Use descriptive names based on research sprint or study name

**Commit Message Guidelines**:
- Use clear, descriptive commit messages
- Examples:
  - "Added user interviews from TAI research"
  - "Updated UX synthesis with November feedback sessions"
  - "Added new theme: Multi-pet workflow challenges"

**Pushing Changes**:
```bash
git add <files>
git commit -m "Description of research data added"
git push -u origin <branch-name>
```

### Code Review & Quality Standards

When reviewing additions or modifications:

1. **Privacy & Anonymization**
   - Verify no PII is exposed
   - Confirm participant identifiers are properly anonymized
   - Check that practice names are authorized for inclusion

2. **Thematic Consistency**
   - Ensure excerpts are placed in appropriate theme sections
   - Verify new themes are justified by sufficient evidence
   - Maintain parallel structure across documents

3. **Quote Accuracy**
   - Preserve original language and context from interviews
   - Use ellipsis (...) to indicate omitted portions
   - Include sufficient context for understanding

4. **Formatting**
   - Use consistent markdown formatting
   - Maintain heading hierarchy
   - Keep list structures uniform

## Working with This Repository

### Common Tasks for AI Assistants

**Analyzing User Feedback**
When asked to analyze feedback or extract insights:
1. Read both synthesis and excerpts documents
2. Identify patterns across multiple interview sources
3. Look for convergent pain points mentioned by different users
4. Consider impact and frequency when prioritizing issues
5. Reference specific interview sources when citing examples

**Extracting Quotes by Theme**
To find feedback on a specific topic:
1. Use Grep to search for keywords across markdown files
2. Check both documents for comprehensive coverage
3. Note the source identifiers for traceability
4. Consider related themes (e.g., Performance often relates to Dictation/Voice)

**Identifying Product Improvements**
When synthesizing recommendations:
1. Review "Recommended actions" across relevant themes
2. Consider cross-theme dependencies (e.g., PE template issues affect both Placement and Performance)
3. Prioritize by impact assessment and user urgency
4. Look for quick wins vs. complex architectural changes

**Adding New Research Data**
When adding new interviews or research:
1. Maintain existing document structure and formatting
2. Use established thematic categories unless new patterns emerge
3. Preserve anonymization and privacy standards
4. Update both synthesis and excerpts documents in parallel
5. Commit with descriptive messages referencing the research source

### Search Strategies

**Finding specific feedback**:
```bash
# Search for keywords across all markdown files
grep -i "keyword" *.md

# Find all mentions of a specific practice or participant
grep "Dr Hazard" *.md

# Search for theme-specific content
grep -A 5 "## Placement/PE" *.md
```

**Analyzing patterns**:
- Look for repeated pain points across different interview sources
- Identify phrases in quotes (marked with ">") for direct user feedback
- Check "Impact if addressed" sections for prioritization guidance
- Review "Recommended actions" for product roadmap insights

## Data Privacy & Ethics

### Privacy Guidelines
1. **Anonymize participant data**: Use hash identifiers, not real names (except where authorized)
2. **Practice information**: Only include practice names with explicit permission
3. **Patient data**: Never include specific patient (pet) information
4. **Recording consent**: All interview excerpts should be from consented recordings
5. **Geographic data**: Location information (state level) is acceptable; avoid specific addresses

### Handling Sensitive Information
- Medical record details should be generalized
- Specific medication names, dosages, or treatment protocols should be generic examples
- Financial information (revenue, pricing) should be anonymized or removed
- Competitive information should be handled with care

## Important Notes for AI Assistants

### What to Do
- ✅ Extract and analyze user feedback patterns
- ✅ Synthesize insights across multiple interview sources
- ✅ Organize research data into thematic categories
- ✅ Maintain document structure and formatting consistency
- ✅ Preserve anonymization and privacy standards
- ✅ Commit changes with clear, descriptive messages
- ✅ Reference specific sources when citing examples

### What NOT to Do
- ❌ Expose personally identifiable information (PII)
- ❌ Make up or fabricate interview quotes
- ❌ Modify existing quotes to change meaning
- ❌ Remove context that changes interpretation
- ❌ Create new themes without sufficient evidence
- ❌ Push directly to main branch
- ❌ Commit without verifying privacy standards

### Working with Existing Data
- This is a **read-heavy** repository - most tasks involve analysis, not modification
- When modifying, preserve existing structure and organization
- Changes should add value, not reorganize without purpose
- Maintain backward compatibility in document structure
- Consider how changes affect both synthesis and excerpts documents

## Document Maintenance

### Regular Maintenance Tasks
1. **Consistency checks**: Ensure themes are aligned across both documents
2. **Deduplication**: Remove redundant excerpts within theme sections
3. **Format standardization**: Maintain consistent markdown formatting
4. **Link validation**: Verify any cross-references remain valid
5. **Privacy audit**: Periodically review for any inadvertent PII exposure

### Version Control Best Practices
- Commit logical units of change (e.g., one interview session)
- Use branches for major reorganizations or new research sprints
- Tag releases for major research milestones
- Keep commits atomic and focused

## Related Resources

### Understanding the Product
- Review the thematic categories to understand TranscribeAI features and pain points
- Read interview excerpts to understand user workflows and contexts
- Note the iterative product development mentioned in "Next steps" sections

### Research Context
- Interviews conducted: October-November 2025
- Product in active development with ongoing refinements
- Beta features mentioned: EchoAI, AI shortcuts, PE template improvements

## Questions & Support

When working with this repository, if you encounter:
- **Unclear thematic categorization**: Review existing patterns; consider if a new theme is warranted
- **Privacy concerns**: Default to more anonymization; ask for clarification if needed
- **Structural questions**: Maintain consistency with existing document organization
- **Git workflow issues**: Follow standard branch naming and commit message conventions

---

**Last Updated**: 2025-11-15
**Document Version**: 1.0
**Maintained by**: Claude AI Assistant for jennirumery/data repository
