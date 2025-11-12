# Deep Synthesis: UX Teardown × User Interview Repository

_This report merges the structured UX teardown (pet & owner office visit journey) with insights from 12 user interviews (Oct–Nov 2025). It highlights converging pain points, AI opportunities, and concrete actions._

## Duplicate Entry
**Representative interview excerpts:**
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “1. Current processing time is too long to stay in the exam room with clients. 2. Creates awkward waiting or small talk during processing. 3. Staff duplicate windows to work on estimates while transcription completes. 2. **Workflow ineffi…”
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “e information into “Notes” sections they don’t typically use. 2. Prefers bulleted lists over conversational paragraphs for Assessments and Plans. 3. AI duplicates information between Plan/Assessment and Notes sections. 4. Physical exam f…”
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “between Plan/Assessment and Notes sections. 4. Physical exam findings are redundantly summarized in Notes. 4. **Field override problems** 1. AI creates duplicate Vitals sections even when assistants have already entered vitals. 2. When s…”
- TranscribeAI Workflow Feedback & Q&A between Jen R 28cae122a6b680869019dc38390c37cd: “- Multiple Vitals blocks per visit when weights are mentioned conversationally (“five vital sections with different weights”). - Physical exam (PE) details duplicated between Vitals notes and PE sections. 2. **Inconsistent capture & impo…”
- TranscribeAI Workflow Feedback & Q&A between Jen R 28cae122a6b680869019dc38390c37cd: “clinical dialogue (lumps/teeth/anal glands, etc.). 3. **Template workflow friction** - PE template selection after initial import triggers a second pass → duplicates + long processing times. - Selecting a PE template post-recording re-pu…”
**Impact if addressed:** Reduced admin time, fewer handoffs, faster booking, higher data accuracy.
**Recommended actions:**
- Unify owner/pet/billing field models; auto-propagate once entered.
- Audit PIMS mappings for 1:1 field integrity; add one-time migration fixes.

## Scheduling/Calendar
**Representative interview excerpts:**
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “mall talk during processing. 3. Staff duplicate windows to work on estimates while transcription completes. 2. **Workflow inefficiencies** 1. Multi-pet appointments are too jumbled for transcription to work effectively. 2. Physical exam …”
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “iption completes. 2. **Workflow inefficiencies** 1. Multi-pet appointments are too jumbled for transcription to work effectively. 2. Physical exam (PE) template must be added after processing rather than upfront. 3. Cannot pause recordin…”
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “processing times:** Prioritize latency improvements over new AI features. 2. **Save for later:** Ability to record in-room and process later in office. 3. **PE template improvements:** Allow template to be set upfront before processing. …”
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “latency improvements over new AI features. 2. **Save for later:** Ability to record in-room and process later in office. 3. **PE template improvements:** Allow template to be set upfront before processing. 4. **Pause/resume capability:**…”
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “shortcuts are “Available for TranscribeAI.” --- ### Next steps 1. Many issues already being addressed through ongoing product refinements. 2. Physical exam template integration improvements in active development. 3. “Save for later” func…”
**Impact if addressed:** Reduced admin time, fewer handoffs, faster booking, higher data accuracy.
**Recommended actions:**
- Prototype predictive slot suggestions (HITL).
- Normalize template rules across direct booking vs request-approval flows.

## Portal/Uploads
**Representative interview excerpts:**
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “nts in Washington create potential liability. 2. Currently using the tool without explicit client consent during rollout. 3. Needs a reliable method to document and store client consent. --- ### Questions and concerns - “Processing times…”
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “g preconfigured normals when “exam is normal” is said. 8. **Discharge instructions:** Auto-generate short, bulleted summaries with thank-you note. 9. **Consent documentation:** In-chart note or visual confirmation of client consent; pote…”
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “AI shortcuts framework being developed to align with doctor-level preferences. 5. Discharge formatting (bulleted summary + thank-you) being refined. 6. Consent documentation feature under exploration, with possible exam-room poster imple…”
- TranscribeAI Workflow Feedback & Q&A between Jen R 28cae122a6b680869019dc38390c37cd: “re-exam form → Initial Complaint auto-mapping; meds/supplements routing. - Quick SOAP minimal mapping exploration. 6. Track microphone-permission behavior; document expected browser/iOS flows and surface a clear, stable mic-test trigger.”
- TranscribeAI Workflow Feedback & Q&A between Jen R 28cae122a6b680869019dc38390c37cd: “licts** - AI-generated discharges duplicate clinic’s auto-vax instructions (resulting in double guidance). 5. **Fragmented sessions** - Tech starts for history → stop/import → doctor restarts → later re-start for results → multiple broke…”
**Impact if addressed:** Reduced admin time, fewer handoffs, faster booking, higher data accuracy.
**Recommended actions:**
- Enable client-side document upload in portal; capture emailed docs automatically.
- Route incoming docs to EchoAI for summarization & structured extraction.

## Placement/PE
**Representative interview excerpts:**
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “mates while transcription completes. 2. **Workflow inefficiencies** 1. Multi-pet appointments are too jumbled for transcription to work effectively. 2. Physical exam (PE) template must be added after processing rather than upfront. 3. Ca…”
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “rs bulleted lists over conversational paragraphs for Assessments and Plans. 3. AI duplicates information between Plan/Assessment and Notes sections. 4. Physical exam findings are redundantly summarized in Notes. 4. **Field override probl…”
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “to mark which shortcuts are “Available for TranscribeAI.” --- ### Next steps 1. Many issues already being addressed through ongoing product refinements. 2. Physical exam template integration improvements in active development. 3. “Save f…”
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “and Plans. 3. AI duplicates information between Plan/Assessment and Notes sections. 4. Physical exam findings are redundantly summarized in Notes. 4. **Field override problems** 1. AI creates duplicate Vitals sections even when assistant…”
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “triggering logout. 5. **Formatting consistency:** Use concise bullet lists for Assessments and Plans. 6. **Prevent duplication:** Respect existing data in SOAP fields (e.g., vitals, notes). 7. **Normal findings logic:** Avoid overwriting…”
**Impact if addressed:** Fewer downstream corrections, improved clinician trust, cleaner medical records.
**Recommended actions:**
- Lock PE field placement rules; prevent raw text fallback.
- Add inline validation + undo for misplacements.

## Dictation/Voice
**Representative interview excerpts:**
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “to expand to 3–4 doctors within 12 months of opening. - Time is at a premium due to being the only veterinarian. - Washington is a two-party consent state for recording, creating legal considerations for AI transcription tools. - Has bee…”
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “e too jumbled for transcription to work effectively. 2. Physical exam (PE) template must be added after processing rather than upfront. 3. Cannot pause recordings and return to process later in the office. 3. **Output formatting issues**…”
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “where me just writing it would have been quicker, at some point, I’ll just give up and I’ll just keep writing SOAPs.” - Questioned legal sufficiency of consent records: “I don’t know what legally satisfies consent, but to me, if it’s not…”
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “Key requests and product implications 1. **Faster processing times:** Prioritize latency improvements over new AI features. 2. **Save for later:** Ability to record in-room and process later in office. 3. **PE template improvements:** Al…”
- TranscribeAI Workflow Feedback & Q&A between Jen R 28cae122a6b680869019dc38390c37cd: “”. 9. **Phone-call notes capture** - Option to transcribe **client-communication notes** (e.g., task Notes, lab/imaging Notes) in conversational mode; keep dictation mode available for formal write-ups. ## Risks / blockers - Trust erosio…”
**Impact if addressed:** Lower abandonment, smoother live use, fewer timeouts or re-records.
**Recommended actions:**
- Provide mic guidance and ambient noise checks before recording.
- Offer 'chunked dictation' mode for long monologues.

## AI Accuracy/Quality
**Representative interview excerpts:**
- TranscribeAI Workflow Feedback & Q&A with Samantha 28dae122a6b6802a9c63c5d4926fc9ab: “ission + assignment rules). - Email correspondence events in Activity Log; timeline for 2-way email. - Share early feedback after first week of use (focus: accuracy, section mapping, time saved). --- ### Notes & observations - Team has c…”
- TranscribeAI Workflow Feedback & Q&A with Lainie B 293ae122a6b680548f44f818641b87dd: “jointed, requiring extensive manual editing. - AI fails to structure content into appropriate SOAP sections. 2. **Physical exam misplacement and formatting errors** > “Physical exam findings go under the O section… it’s putting it under …”
- TranscribeAI Workflow Feedback & Q&A with Harley M 293ae122a6b680699c7ad424c0119d27: “istory collection is typed, even though structure exists via shortcuts. - Time-consuming and repetitive; opportunity for automation. 2. **Medication record accuracy** - Patient medication lists not always current; owners often discontinu…”
- TranscribeAI Workflow Feedback & Q&A with Harley M 293ae122a6b680699c7ad424c0119d27: “→ allow more free-form, flexible input. - **Team exam workflow:** - Potential to have doctor present during technician history to maximize AI transcription accuracy. - **Transcript access management:** - Allow doctors to view each other’…”
- TranscribeAI Workflow Feedback & Q&A with Harley M 293ae122a6b680699c7ad424c0119d27: “s management:** - Allow doctors to view each other’s transcripts for continuity of care. - Admins or team leads may need review access for training and quality control. - **Role-based visibility:** > “I think role specific even would be …”
**Impact if addressed:** Fewer downstream corrections, improved clinician trust, cleaner medical records.
**Recommended actions:**
- Expose 'why' for suggestions; allow quick thumbs & rationale capture.
- Add model-region/config switch for clinics with poor accuracy.

## Performance/Timeout
**Representative interview excerpts:**
- TranscribeAI Workflow Feedback & Q&A between Jen R 28cae122a6b680869019dc38390c37cd: “othing discussed” imports. - Operational noise (duplicate discharges, multi-Vitals) increases cleanup time and undermines perceived value. - Access limitations slow care when the original recorder isn’t available. ## Next steps 1. **Paig…”
- TranscribeAI Workflow Feedback & Q&A with Samantha 28dae122a6b6802a9c63c5d4926fc9ab: “o a discrete Emotional Health section; allow TranscribeAI to populate it from spoken cues (mentations, triggers, handling notes). - Reporting on Fear Free flags over time. - **Acupuncture support**: Vocabulary pack for point names, struc…”
- TranscribeAI Workflow Feedback & Q&A with Jen Van  293ae122a6b68074a6e6c8e2b58d8728: “> “My numbers were literally instead of 32,000, it was like 8,000.” > - Production reports produce incorrect totals when previewed before downloading. - Inactive items appear in dropdown filters. - Confirmed reproducible bug affecting ac…”
- TranscribeAI Workflow Feedback & Q&A with Dr Ellio 293ae122a6b6807d9907ccb1d2260930: “--- ### Background - High-volume, efficiency-driven workflow where every second matters. - Uses TranscribeAI during exams but reports processing delays that slow transitions between appointments. - Technicians handle diagnostic entries (…”
- TranscribeAI Workflow Feedback & Q&A with Dr Ellio 293ae122a6b6807d9907ccb1d2260930: ““I don’t have time for it to think, and then have me put charges in.” > - Doctors must wait or open new tabs to keep working. - Causes noticeable slowdown in short appointment windows. 3. **Multi-tab workaround** > “I always have multipl…”
**Impact if addressed:** Lower abandonment, smoother live use, fewer timeouts or re-records.
**Recommended actions:**
- Silent session refresh when panels are open; background saves.
- Streaming transcript + staged apply to reduce perceived latency.

## EchoAI/Summary
**Representative interview excerpts:**
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “er design for batch processing after hours. 4. AI shortcuts framework being developed to align with doctor-level preferences. 5. Discharge formatting (bulleted summary + thank-you) being refined. 6. Consent documentation feature under ex…”
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “aragraphs for Assessments and Plans. 3. AI duplicates information between Plan/Assessment and Notes sections. 4. Physical exam findings are redundantly summarized in Notes. 4. **Field override problems** 1. AI creates duplicate Vitals se…”
- TranscribeAI Workflow Feedback & Q&A with Jen Van  293ae122a6b68074a6e6c8e2b58d8728: “to TranscribeAI? 2. Can TranscribeAI and DiagnoseAI be merged into one interface? 3. Why are inactive product categories still visible in reports? 4. When will EchoAI beta become available (estimated 2–3 weeks)? 5. Has the report preview…”
- TranscribeAI Workflow Feedback & Q&A with Jen Van  293ae122a6b68074a6e6c8e2b58d8728: “ude in Medical Record” toggle for OTC products and preventatives. 6. **Reporting:** Fix preview/download discrepancy; filter inactive products by default. 7. **EchoAI:** Include Okeechobee Vet Hospital in early beta for summarization tes…”
- TranscribeAI Workflow Feedback & Q&A with Jen Van  293ae122a6b68074a6e6c8e2b58d8728: “Linda and development. 2. Share **interface visibility feedback** with design team. 3. Investigate **quick invoice → medical record** enhancement. 4. Confirm **EchoAI beta invite** once feature is ready. 5. Coordinate **sharding maintena…”
**Impact if addressed:** Improved throughput and consistency in daily workflows.
**Recommended actions:**
- Standardize bullet/paragraph toggles; canonical summary length presets.
- Attach source pointers (timestamped utterances) for trust.

## SOAP
**Representative interview excerpts:**
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “ng to read stuff or make adjustments to the point where me just writing it would have been quicker, at some point, I’ll just give up and I’ll just keep writing SOAPs.” - Questioned legal sufficiency of consent records: “I don’t know what…”
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “s or triggering logout. 5. **Formatting consistency:** Use concise bullet lists for Assessments and Plans. 6. **Prevent duplication:** Respect existing data in SOAP fields (e.g., vitals, notes). 7. **Normal findings logic:** Avoid overwr…”
- TranscribeAI Workflow Feedback & Q&A between Jen R 28cae122a6b680869019dc38390c37cd: “other user; risk if the primary user is out. - **Microphone permission prompts** - “Try me/test mic” appears sporadically; feels random to staff. - **Quick SOAP compatibility** - Unclear if/when TranscribeAI supports Quick SOAPs for tech…”
- TranscribeAI Workflow Feedback & Q&A between Jen R 28cae122a6b680869019dc38390c37cd: “prompts** - “Try me/test mic” appears sporadically; feels random to staff. - **Quick SOAP compatibility** - Unclear if/when TranscribeAI supports Quick SOAPs for tech appointments. ## Key quotes - “It recorded like 16 minutes and then di…”
- TranscribeAI Workflow Feedback & Q&A between Jen R 28cae122a6b680869019dc38390c37cd: “Admins** and **Supervising Doctor** view transcripts created by others; log access for audit. - Longer-term: configurable sharing rules by role. 6. **Quick SOAP compatibility** - Explore enabling TranscribeAI on Quick SOAPs for tech-only…”
**Impact if addressed:** Improved throughput and consistency in daily workflows.
**Recommended actions:**
- Provide plan-summary scaffolds with reusable snippets & fee links.
- One-click transform: bullets ↔ paragraphs ↔ numbered lists.

## TranscribeAI
**Representative interview excerpts:**
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “# TranscribeAI Feedback with Dr. Hazard Date: October 8, 2025 Location: Lynnwood, WA, United States Practice Name: Seaview Animal Hospital **Participants:** Jen Rumery, Jon”
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “:** In-chart note or visual confirmation of client consent; potential room signage. 10. **AI shortcuts:** Add toggle to mark which shortcuts are “Available for TranscribeAI.” --- ### Next steps 1. Many issues already being addressed thro…”
- TranscribeAI Feedback with Dr Hazard 288ae122a6b680889f46c00aedcd08eb: “thank-you) being refined. 6. Consent documentation feature under exploration, with possible exam-room poster implementation. 7. Dr. Hazard will continue using TranscribeAI in production and share ongoing feedback. 8. Jen to follow up wit…”
- TranscribeAI Workflow Feedback & Q&A between Jen R 28cae122a6b680869019dc38390c37cd: “# TranscribeAI Workflow Feedback & Q&A between Jen Rumery and Paige and Dr. Sarah Date: October 14, 2025 Location: Port Byron, IL, United States Practice Name: River View V”
- TranscribeAI Workflow Feedback & Q&A between Jen R 28cae122a6b680869019dc38390c37cd: “e Practice: River View Veterinary Service - Port Byron, IL Participants: Jen Rumery (Shepherd), Paige (Tech/Admin), Dr. Sarah Foust (Owner) Systems in use: TranscribeAI (with Dr. Sarah), ScribeNote (with Dr. Terry Foust); automated vax d…”
**Impact if addressed:** Improved throughput and consistency in daily workflows.

